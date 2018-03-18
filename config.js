/**
 * Config settings for video stream
 */
module.exports = {
  port: parseInt(process.env.PORT || 8080),
  width: parseInt(process.env.WIDTH || 640),
  height: parseInt(process.env.HEIGHT || 480),
  fps: parseInt(process.env.FPS || 24)
};