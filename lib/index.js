import React from 'react';

export default function Flex(props) {
  let style = {
    flex: '0 1 auto'
  };

  const aligningValues = {
    row: {
      justify: {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end'
      },
      align: {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end',
        stretch: 'stretch'
      }
    },
    column: {
      justify: {
        top: 'flex-start',
        center: 'center',
        bottom: 'flex-end'
      },
      align: {
        left: 'flex-start',
        center: 'center',
        right: 'flex-end',
        stretch: 'stretch'
      }
    }
  };

  let direction = 'row';

  if (props.row) {
    style.display = 'flex';
    style.flexDirection = 'row';
    direction = 'row';
    style.height = '100%';
  }
  if (props.reverseRow) {
    style.display = 'flex';
    style.flexDirection = 'row-reverse';
    style.height = '100%';
  }

  if (props.column) {
    style.display = 'flex';
    style.flexDirection = 'column';
    direction = 'column';
    style.height = '100%';
  }
  if (props.reverseColumn) {
    style.display = 'flex';
    style.flexDirection = 'column-reverse';
    style.height = '100%';
  }

  if (props.alignSelf) {
    style.alignSelf = {
      top: 'flex-start',
      right: 'flex-end',
      bottom: 'flex-end',
      left: 'flex-start'
    }[props.alignSelf];
  }

  if (props.wrap) {
    style.flexWrap = 'wrap';
  }
  if (props.reverseWrap) {
    style.flexWrap = 'wrap-reverse';
  }

  if (!props.row && !props.column && props.alignChildren) {
    direction = 'row';
    style.display = 'flex';
    style.flexDirection = 'row';
  }
  if (props.alignChildren) {
    const alignment = props.alignChildren.split(' ');
    style.justifyContent = aligningValues[direction].justify[alignment[0]];
    if (alignment[1]) {
      style.alignItems = aligningValues[direction].align[alignment[1]];
    }
    if (alignment[1] && props.children.length > 1) {
      style.alignContent = aligningValues[direction].align[alignment[1]];
    }
  }

  if (props.grow) {
    style.flexGrow = props.grow === true ? '1' : String(props.grow);
  }

  if (props.order) {
    style.order = String(props.order);
  }

  if (props.style) {
    style = Object.assign(style, props.style);
  }

  return (
    <div {...props} style={style}>
      {props.children}
    </div>
  );
}

Flex.propTypes = {
  children: React.PropTypes.any,
  alignChildren: React.PropTypes.string,
  grow: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  order: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]),
  row: React.PropTypes.bool,
  reverseRow: React.PropTypes.bool,
  column: React.PropTypes.bool,
  reverseColumn: React.PropTypes.bool,
  wrap: React.PropTypes.bool,
  reverseWrap: React.PropTypes.bool,
  style: React.PropTypes.object,
  alignSelf: React.PropTypes.string
};
