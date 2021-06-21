# Create Blog

1. Create a directory in `src/data/blogs`. The title doesn't matter.
2. Add a `main_image.jpg` to the blog folder. This will be used as the header image of the blog. Make sure it has decent resolution.
3. Add the markdown file: `<Blog Title>.md`. The title for this file will be used as the official title of the post.
4. Ensure all images used in the post are in the blog's directory.
5. When finished, run `npm run seed` in the terminal.

# Edit Blog

1. Make changes to markdown or change title by renaming markdown document
2. Run `npm run seed`

# Create Portfolio Item

1. Create a directory in `src/data/portfolio`. The title doesn't matter.
2. Add images to the directory (at least one small and one large). File type must be jpg, png, jpeg (or edit the seed script).
3. Add a `data.json` file and follow this API:

```json
{
  "id": "Number (will be used to sort)",
  "title": "String",
  "subtitle": "String",
  "imageUrl": "String (small img)",
  "largeImageUrl": ["Strings", "Large", "Images"],
  "liveUrl": "String",
  "gitHubUrl": "String"
}
```

4. Run `npm run seed`

# Update portfolio item

1. Make changes
2. Run `npm run seed`
