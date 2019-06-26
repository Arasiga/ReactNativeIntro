import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    const { library: { description }, expanded } = this.props;

    if (expanded) {
      return (
        <Text>
          {description}
        </Text>
      );
    }
  }

  render() {
    const {
      library: { title, id },
      selectLibrary
    } = this.props;
    const { titleStyle } = styles;
    const { renderDescription } = this;

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};

export default connect(mapStateToProps, actions)(ListItem);
