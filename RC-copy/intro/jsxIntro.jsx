//JSX = Javascript extention.  Syntactic Sugar
//write HTML-like code in JS -> compiles into regular JS

//JSX
	{
		render: function(){
			return <div>
			Hello World!
			</div>
	}
}

//Compile into JS

{
	render function(){
		return React.createElement('div', null, 'Hello World!')
	}
}