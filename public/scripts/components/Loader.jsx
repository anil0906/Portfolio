var React = require('react');

function Loader(props) {
  var className = props.util.isLoading ? '' : 'hide-loader';
  return (
    <div className={'loader ' + className}>
      <div className='loader-image'></div>
    </div>
  );
}
module.exports = Loader;
