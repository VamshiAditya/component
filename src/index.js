import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App=()=>{
	return (
		
		<div className="ui container comments">

			<ApprovalCard>
				<h4>Warning!</h4>
				<div>Are you sure yo want to do this?</div>
			</ApprovalCard>

		  <ApprovalCard>
		    <CommentDetail 
				author="Sam"  
				timeAgo="Today at 4:45PM" 
				content="Nice blog post!"
				avator={faker.image.avatar()}
			/>
		  </ApprovalCard>

		  <ApprovalCard>
		    <CommentDetail 
				author="Alex" 
				timeAgo="Today at 2:00AM" 
				content="I like the subject"
				avator={faker.image.avatar()}
			/>
		  </ApprovalCard>

		  <ApprovalCard>
		    <CommentDetail 
				author="Jane" 
				timeAgo="Yesterday at 5:00PM" 
				content="I like the writing"
				avator={faker.image.avatar()}
			/>		
		  </ApprovalCard>	
					
		</div>
		
	);
};
ReactDOM.render(<App/>, document.querySelector('#root'));