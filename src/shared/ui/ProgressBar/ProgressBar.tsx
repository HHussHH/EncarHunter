import "./ProgressBar.scss"
export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
	<div
	  className="ProgressBar"
	  style={{
		width: `${progress}%`,
	  }}
	/>
  );
};

