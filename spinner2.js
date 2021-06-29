const animations = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

// add an extra loop to make the spinning go longer
while (interval < 2000) {
  for (const char of animations) {
    setTimeout(() => {
      process.stdout.write(char);
    }, interval);
    interval += 200;
  }
}
