import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library.item} />;
  }

  render() {
    const { libraries } = this.props;
    const { renderItem } = this;

    return (
      <FlatList
        data={libraries}
        renderItem={renderItem}
        keyExtractor={library => library.title}
      />
    );
  }
}

const mapStateToProps = state => (
  { libraries: state.libraries }
);

export default connect(mapStateToProps)(LibraryList);
