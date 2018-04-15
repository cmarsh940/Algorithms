function getContentType(filename) {
  const extension = filename.match(/.*\.([^\.]*)$/)[1];
  if (extension == "html") {
    return "text/html";
  }
  if (extension == "css") {
    return "text/css";
  }
  if (extension == "jpeg" || extension == "jpg") {
    return "image/jpeg";
  } else {
    return "text/plain";
  }
}
