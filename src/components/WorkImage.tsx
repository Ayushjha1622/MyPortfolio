import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Props {
  image?: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const isGithub = props.link?.includes("github.com");

  return (
    <div className="work-image" style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
        style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100%", minHeight: "300px", backgroundColor: "rgba(255,255,255,0.02)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)", position: "relative" }}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        {props.image ? (
          <img src={props.image} alt={props.alt} />
        ) : (
          <div style={{ fontSize: "120px", color: "var(--accentColor, #5eead4)", opacity: 0.8 }}>
            {isGithub ? <FaGithub /> : <FaExternalLinkAlt />}
          </div>
        )}
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;
