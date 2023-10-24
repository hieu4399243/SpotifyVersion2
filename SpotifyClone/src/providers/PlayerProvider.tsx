import { PropsWithChildren, createContext, useState, useContext } from 'react';
import { Track } from '../types';

type PlayerContextType = {
  track?: Track; //đại diện cho bản nhạc hiện đang được phát.
  setTrack: (track: Track) => void; //Một hàm, được sử dụng để thiết lập track mới
};

const PlayerContext = createContext<PlayerContextType>({
  setTrack: () => {}, //Context sẽ chứa thông tin về bản nhạc đang phát và hàm để cập nhật thông tin đó.
});

export default function PlayerProvider({ children }: PropsWithChildren) {
  const [track, setTrack] = useState<Track>();

  return (
    <PlayerContext.Provider value={{ track, setTrack }}>
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayerContext = () => useContext(PlayerContext);