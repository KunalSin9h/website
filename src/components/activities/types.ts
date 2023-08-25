export type Activities = (NeoVim | VsCode | undefined)[];
export type Activity = NeoVim | VsCode | undefined;

export type Spotify = {
  track_id: string;
  timestamps: {
    start: number;
    end: number;
  };
  album: string;
  album_art_url: string;
  artist: string;
  song: string;
};

export type NeoVim = {
  id: string;
  name: string;
  type: number;
  state: string;
  details: string;
  timestamps: {
    start: number;
  };
  application_id: string;
  assets: {
    large_image: string;
    large_text: string;
    small_image: string;
    small_text: string;
  };
  buttons?: string[];
  created_at: number;
};

export type VsCode = NeoVim;
