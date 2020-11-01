const mongoose = require("mongoose");

const UrlModel = mongoose.model(
  "Url",
  mongoose.Schema(
    {
      slug: {
        type: String,
        minLength: [5, "Slug does not contain enough characters (Minimum 5)."],
        maxLength: [5, "Slug ocntains too many charachters (Maximum 5)."],
        trim: true,
        validate: {
          validator: (slug) => {
            // only alphanumeric along with hyphens 
            return /[w\-]/.test(slug);
          },
          message: (props) => `${props.value} is not a valid slug.`,
        },
      },
      url: {
        type: String,
        required: [true, "A valid URL must be provided."],
        trim: true,
      },
    },
    { timestamps: true }
  )
);

module.exports = UrlModel;
