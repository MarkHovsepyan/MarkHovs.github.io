import React from 'react';
import PropTypes from 'prop-types';

import Qualification from './Education/Qualification';

const OtherEducation = ({ data }) => (
  <div className="education">
    <div className="link-to" id="other%20education" />
    <div className="title">
      <h3>Other Education</h3>
    </div>
    {data.map((degree) => (
      <Qualification
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

OtherEducation.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    school: PropTypes.string,
    degree: PropTypes.string,
    link: PropTypes.string,
    year: PropTypes.number,
  })),
};

OtherEducation.defaultProps = {
  data: [],
};

export default OtherEducation;
