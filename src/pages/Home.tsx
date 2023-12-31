import { Link } from "react-router-dom"
import LogoImg from "src/assets/logo.svg"
import PlayerVsCpuImg from "src/assets/player-vs-cpu.svg"
import PlayerVsPlayerImg from "src/assets/player-vs-player.svg"

export function Home() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <LogoImg className="m-20" />
        <Link to="/play-vs-ai">
          <div className="btn-thick relative">
            Play vs CPU
            <PlayerVsCpuImg className="absolute right-5" />
          </div>
        </Link>
        <Link to="/play-vs-player">
          <div className="btn-thick mt-8 bg-main-color-2 relative">
            Play vs Player
            <PlayerVsPlayerImg className="absolute right-5" />
          </div>
        </Link>
        <Link to="/rules">
          <div className="btn-thick mt-8 bg-white">Game rules</div>
        </Link>
      </div>
    </div>
  )
}
