const slugify = require('slugify');
const { nanoid } = require('nanoid');
const fs = require('fs');
const path = require('path');
require('dotenv').config();
require('./check-env.js');

function seedBlogs() {
  try {
    console.log('Seeding blogs...');
    const blogs = fs
      .readdirSync(path.join(__dirname, 'blogs'))
      .map((blog) => path.join(__dirname, 'blogs', blog));

    const newBlogs = blogs.filter(
      (blog) => !fs.readdirSync(blog).includes('data.json'),
    );

    const newBlogsMessage = newBlogs.length
      ? 'Found new blogs, adding data...'
      : 'No new blogs found, refreshing database anyway';

    console.log(newBlogsMessage);

    newBlogs.forEach((blog) => {
      const blogFile = fs
        .readdirSync(blog)
        .find((file) => file.slice(file.length - 3) === '.md');

      if (!blogFile)
        throw new Error(`No markdown file found in folder ${blog}`);

      // gather blog data
      const title = blogFile.split('.')[0];
      const markdown = fs.readFileSync(path.join(blog, blogFile)).toString();
      const id = nanoid();

      const data = {
        title,
        author: 'Alex Younger',
        date: Date.now(),
        slug: slugify(title, { lower: true }),
        id,
        markdown,
        homeDirectory: blog,
        lastEdited: '',
      };

      // send images to public folder
      const imageFiles = fs.readdirSync(blog).filter((file) => {
        const split = file.split('.');
        return /jpg|png|jpeg|gif/.test(split[split.length - 1]);
      });
      imageFiles.forEach((file) => {
        if (fs.existsSync(path.join(process.env.BLOG_IMAGE_FOLDER, file)))
          throw new Error('Image duplicate found: ', file);

        let newFileName;

        if (file === 'main_image.jpg') {
          newFileName = data.slug + '.jpg';
          data.mainImageUrl = newFileName;
        }

        fs.copyFileSync(
          path.join(blog, file),
          path.join(
            process.env.BLOG_IMAGE_FOLDER,
            newFileName ? newFileName : file,
          ),
        );
      });

      fs.writeFileSync(path.join(blog, 'data.json'), JSON.stringify(data));
    });

    const blogData = blogs.map((blog) => {
      const dataPath = path.join(blog, 'data.json');
      if (!fs.existsSync(dataPath))
        throw new Error(`${blog} has no data.json file!`);

      return JSON.parse(fs.readFileSync(dataPath));
    });

    const editedBlogs = blogData.filter((data) => {
      return (
        data.markdown !==
        fs
          .readFileSync(path.join(data.homeDirectory, `${data.title}.md`))
          .toString()
      );
    });

    console.log(editedBlogs);

    fs.writeFileSync(
      path.resolve(__dirname, 'blogData.json'),
      JSON.stringify(blogData),
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

function seedPortfolio() {
  try {
    console.log('Seeding portfolio...');

    const portfolioFolders = fs
      .readdirSync(path.join(__dirname, 'portfolio'))
      .map((portfolio) => path.join(__dirname, 'portfolio', portfolio));

    portfolioFolders.forEach((folder) => {
      const dataFile = fs
        .readdirSync(folder)
        .find((file) => file === 'data.json');
      if (!dataFile) throw new Error(`No data file found in folder ${folder}`);

      // send images to public folder
      const imageFiles = fs.readdirSync(folder).filter((file) => {
        const split = file.split('.');
        return /jpg|png|jpeg/.test(split[split.length - 1]);
      });

      if (imageFiles.length < 2)
        throw new Error(`Not enough images found in directory ${folder}`);

      imageFiles.forEach((file) => {
        if (
          !fs.existsSync(path.join(process.env.PORTFOLIO_IMAGE_FOLDER, file))
        ) {
          fs.copyFileSync(
            path.join(folder, file),
            path.join(process.env.PORTFOLIO_IMAGE_FOLDER, file),
          );
        }
      });
    });

    const portfolioData = portfolioFolders.map((folder) => {
      const dataPath = path.join(folder, 'data.json');
      if (!fs.existsSync(dataPath))
        throw new Error(`${folder} has no data.json file!`);

      return JSON.parse(fs.readFileSync(dataPath));
    });

    fs.writeFileSync(
      path.resolve(__dirname, 'portfolioData.json'),
      JSON.stringify(portfolioData),
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedBlogs();
seedPortfolio();

console.log('Finished!');

process.exit();
