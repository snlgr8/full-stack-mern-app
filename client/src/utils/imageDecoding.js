const arrayBufferToBase64 = (buffer) => {
  var binary = '';
  var bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => (binary += String.fromCharCode(b)));
  return window.btoa(binary);
};

export const getImage = (data) => {
  var base64Flag = 'data:image/jpeg;base64,';
  var imageStr = arrayBufferToBase64(data);
  var img = base64Flag + imageStr;
  return img;
};
