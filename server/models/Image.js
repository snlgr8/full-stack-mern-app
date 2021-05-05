const { model, Schema } = require('mongoose');

const ImgSchema = new Schema(
  {
    img: { data: Buffer, contentType: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model('Img', ImgSchema);
