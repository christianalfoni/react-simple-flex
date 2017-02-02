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
    },
    flip: {
      column: {
        justify: {
          top: 'left',
          center: 'center',
          bottom: 'right'
        },
        align: {
          left: 'top',
          center: 'center',
          right: 'bottom',
          stretch: null
        }
      }
    }
  };

  let direction = 'row';

  if (props.row || (props.column && !Array.isArray(props.children))) {
    style.display = 'flex';
    style.flexDirection = 'row';
    direction = 'row';
  }
  if (props.reverseRow || (props.reverseColumn && !Array.isArray(props.children))) {
    style.display = 'flex';
    style.flexDirection = 'row-reverse';
  }

  if (props.column && Array.isArray(props.children)) {
    style.display = 'flex';
    style.flexDirection = 'column';
    direction = 'column';
  }
  if (props.reverseColumn && Array.isArray(props.children)) {
    style.display = 'flex';
    style.flexDirection = 'column-reverse';
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

  if (
    !props.row &&
    !props.column &&
    !props.reverseRow &&
    !props.reverseColumn &&
    (props.align || props.alignVertical || props.alignHorizontal)) {
    direction = 'row';
    style.display = 'flex';
    style.flexDirection = 'row';
  }

  let align = 'left top';
  if (props.align) {
    align = props.align;
  } else if (props.alignHorizontal && props.alignVertical) {
    align = direction === 'row' ? props.alignHorizontal + ' ' + props.alignVertical : props.alignVertical + ' ' + props.alignHorizontal;
  } else if (props.alignVertical) {
    align = direction === 'row' ? 'left ' + props.alignVertical : props.alignVertical;
  } else if (props.alignHorizontal) {
    align = direction === 'row' ? props.alignHorizontal : 'top ' + props.alignHorizontal;
  }

  if (props.align || props.alignVertical || props.alignHorizontal) {
    let alignment = align.split(' ');
    if (
      (props.column && direction === 'row') ||
      (props.reverseColumn && direction === 'row')
    ) {
      direction = 'column';
      alignment = alignment.length === 1 ? ['top', alignment[0]] : [aligningValues.flip.column.align[alignment[1]], alignment[0]];
    }
    style.justifyContent = aligningValues[direction].justify[alignment[0]];
    if (alignment[1]) {
      style.alignItems = aligningValues[direction].align[alignment[1]];
    }
    if (alignment[1] && Array.isArray(props.children)) {
      style.alignContent = aligningValues[direction].align[alignment[1]];
    }
  }

  if (props.grow) {
    style.flexGrow = props.grow === true ? '1' : String(props.grow);
  }
  
  if (props.shrink) {
    style.flexGrow = props.shrink === true ? '1' : String(props.shrink);
  }

  if (props.order) {
    style.order = String(props.order);
  }

  if (props.style) {
    style = Object.assign(style, props.style);
  }

  const ownPropKeys = [
    'align',
    'alignVertical',
    'alignHorizontal',
    'grow',
    'order',
    'row',
    'reverseRow',
    'column',
    'reverseColumn',
    'wrap',
    'reverseWrap',
    'alignSelf'
  ];
  const passProps = Object.keys(props)
    .filter((key) => {
      return ownPropKeys.indexOf(key) === -1;
    })
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});

  return (
    <div {...passProps} style={style}>
      {props.children}
    </div>
  );
}

Flex.propTypes = {
  children: React.PropTypes.any,
  align: React.PropTypes.string,
  alignVertical: React.PropTypes.string,
  alignHorizontal: React.PropTypes.string,
  grow: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.bool,
    React.PropTypes.number
  ]),
  shrink: React.PropTypes.oneOfType([
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
