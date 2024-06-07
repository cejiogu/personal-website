import React from 'react';

// Props for this component should later also include the link, not just the title of the page
const PageTitle = (props: {name: string}) => {
  return (
    <div className="PageTitle">
      {props.name}
    </div>
  );

}

export default PageTitle;