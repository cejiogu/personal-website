import React from 'react';
import './About.css';
import Organization from '../components/OrgBox/OrgBox';
import NSBElogo from '../images/NSBE logo.jpg';
import URMClogo from '../images/URMC logo.png';
import ColorStacklogo from '../images/ColorStack logo.jpeg';

// Look into passing in the text style as a prop
const About = () => {
  return(
    <React.Fragment>
      <div className="text" style={{paddingLeft: "30px", fontSize: "22px"}}>
        <h2> My Journey</h2>
        <div style={{paddingLeft: "50px", textIndent: "3%"}}>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id ultrices eros. Suspendisse tempus aliquam tristique. Aliquam non sagittis mauris, sed volutpat metus. Nulla sed metus et augue ultricies euismod. Nunc tincidunt, orci eu hendrerit tempus, sem magna porttitor ligula, vitae tristique orci ligula ut neque. Suspendisse luctus, sapien a efficitur dictum, lorem eros suscipit libero, in elementum justo orci scelerisque orci. Aenean blandit lectus elit, vitae rhoncus nunc consequat nec. Etiam sit amet sem cursus, vehicula turpis sit amet, commodo neque. Suspendisse felis quam, tristique non convallis a, maximus dapibus augue. Etiam fringilla erat erat, ut lacinia urna eleifend vel. In hac habitasse platea dictumst. Pellentesque suscipit luctus ipsum, ut suscipit magna posuere a. Vivamus ac magna vel libero accumsan laoreet.
          </p>
          <p>
          Praesent accumsan risus et hendrerit euismod. In vehicula dolor ut magna consectetur dignissim. Pellentesque hendrerit ligula vel est finibus scelerisque. Sed nec nisl vel felis posuere bibendum. Vestibulum placerat, enim vel aliquam sodales, nisl tellus iaculis felis, et placerat nisl felis porta odio. Vestibulum sit amet porttitor dui. Vivamus pulvinar eu nulla ut viverra. In eget risus nec sapien faucibus interdum. Morbi aliquam sapien sapien, eu tempor est faucibus vitae. Maecenas condimentum euismod posuere. Aenean ac enim ut lacus sollicitudin dictum. Duis tempus enim eget dolor vulputate, a mollis urna convallis. Pellentesque tristique vel risus eu maximus. Mauris faucibus vitae erat nec congue.
          </p>
        </div>
        <h2 style={{textAlign: "center",}}>Organizations</h2>
      </div>
      <div className="organizations">
        {/* <Organization name="National Society of Black Engineers" img='' position="Telecommunications Chair" desc="I am a member of Cornell University's chapter of the National Society of Black Engineers."/>
        <Organization name="Underrepresented Minorities in Computing" img='' position="General Member" desc="I am a member of Cornell University's on-campus organization 'Underrepresented Minorities in Computing.'"/>
        <Organization name="ColorStack" img='' position='Active Member' desc="I am an active member of the national organization 'ColorStack.'" /> */}
    
          <Organization name="" img={NSBElogo} />
          <Organization name="" img={URMClogo} />
          <Organization name="" img={ColorStacklogo} />
          <Organization name="" img={ColorStacklogo} />
        </div>

    </React.Fragment>
  );
}

export default About;