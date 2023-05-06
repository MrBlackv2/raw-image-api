const axios = require('axios');

const hostname = process.env.SD_API_HOST;
const txt2imgPath = '/sdapi/v1/txt2img';
const ALWAYS_NEG = ', youth, young, child, deformed, shiny skin, oily skin, unrealistic lighting, portrait, cartoon, anime, fake, airbrushed skin, deformed, blur, blurry, bokeh, warp hard bokeh, gaussian, out of focus, out of frame, obese, odd proportions, asymmetrical, super thin, fat,dialog, words, fonts, teeth, ((((ugly)))), (((duplicate))), ((morbid)), monochrome, b&w, \[out of frame\], extra fingers, mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), ((ugly)), blurry, ((bad anatomy)), (((bad proportions))), ((extra limbs)), cloned face, (((disfigured))), out of frame, ugly, extra limbs, (bad anatomy), gross proportions, (malformed limbs), ((missing arms)), ((missing legs)), (((extra arms))), (((extra legs))), mutated hands, (fused fingers), (too many fingers), (((long neck)))';

const txt2img = async (req, res) => {
  const sdResponse = await makeRequest(txt2imgPath, req.body);
  res.json(sdResponse);
};

const txt2imgFull = async (req, res) => {
  const sdResponse = await makeRequest(txt2imgPath, req.body);
  res.json(sdResponse);
};

const makeRequest = async (url, { prompt, orientation }) => {
  if (['portrait', 'landscape', 'square'].indexOf(orientation) === -1) {
    orientation = 'portrait';
  }
  let negativePrompt = '';
  const options = {
    promptInclude: true,
    negativePromptInclude: true,
  };

  const data = {
    enable_hr: false,
    denoising_strength: 0,
    prompt: options?.promptInclude
      ? `${prompt}, sexy, beautiful, highly detailed skin, 4K RAW image`
      : prompt,
    seed: -1,
    batch_size: 1,
    n_iter: 1,
    steps: 30,
    cfg_scale: 7,
    width: orientation === 'portrait' || orientation === 'square' ? 512 : 768,
    height: orientation === 'landscape' || orientation === 'square' ? 512 : 768,
    restore_faces: true,
    tiling: false,
    negative_prompt: options?.negativePromptInclude
      ? `${negativePrompt}${ALWAYS_NEG}, animated, anime, painting, illustration, deformed`
      : `${negativePrompt}${ALWAYS_NEG}`,
    sampler_index: 'DPM++ 2M Karras',
  };

  try {
    const res = await axios({
      method: 'post',
      url: `${hostname}${url}`,
      data: data,
    });
    return res.data;
  } catch (err) {
    console.error('Error making request', err.message);
  }
};

module.exports = {
  txt2img,
  txt2imgFull,
};
