import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Products from './Products';
import Navigation from './Nav';
import ProductDetail from './ProductDetail';
import ProductImages from './ProductImages';
import { connect } from 'react-redux';
import { fetchCategories, fetchProducts, fetchProductImages } from './store';
import Home from './Home';

class App extends Component {
  componentDidMount() {
    this.props.fetchInitialCategories();
    this.props.fetchInitialProducts();
    this.props.fetchInitialProductImages();
  }
  render() {
    return (
      <Fragment>
        <HashRouter>
          <Route component={Navigation} />
          <Switch>
            <Route exact path="/products" component={Products} />
            <Route path="/products/category/:categoryId" component={Products} />
            <Route exact path="/products/:id" component={ProductDetail} />
            <Route
              exact
              path="/products/productImages"
              component={ProductImages}
            />
            <Route exact path="/" component={Home} />
          </Switch>
        </HashRouter>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchInitialCategories: () => dispatch(fetchCategories()),
    fetchInitialProducts: () => dispatch(fetchProducts()),
    fetchInitialProductImages: () => dispatch(fetchProductImages())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
