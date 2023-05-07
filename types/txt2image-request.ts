export interface Txt2ImageRequest {
  prompt: string;
  negativePrompt?: string;
  orientation: 'portrait' | 'landscape' | 'square';
}
