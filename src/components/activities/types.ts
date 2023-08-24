export type Activities = (Spotify | NeoVim | VsCode | undefined)[];
export type Activity = Spotify | NeoVim | VsCode | undefined;

export type Spotify = {
  flag: number;
  id: string;
  name: string;
  type: number;
  state: string;
  session_id: string;
  details: string;
  timestamps: {
    start: number;
    end: number;
  };
  assets: {
    large_image: string;
    large_text: string;
  };
  sync_id: string;
  created_at: number;
  party: {
    id: string;
  };
};

export function isSpotify(act: Activity): act is Spotify {
  return true;
}

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
