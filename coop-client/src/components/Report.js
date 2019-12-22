// components/Report.js

import React from 'react';

function Report (props) {
	return (
		<div>
			<h1>{props.report.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: props.report.content }} />
		</div>
	)
}

export default Report;