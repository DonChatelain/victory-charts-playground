import './FullPageContainer.scss'

export const FullPageContainer: React.FC = (props) => {
  return (
    <div className="FullPageContainer">
      {props.children}
    </div>
  );
}