import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
class ListMenu extends Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-4">
          <ListGroupItem>
            <ListGroupItem active tag="a" href="#" action>
              Cras justo odio
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action>
              Dapibus ac facilisis in
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action>
              Morbi leo risus
            </ListGroupItem>
            <ListGroupItem tag="a" href="#" action>
              Porta ac consectetur ac
            </ListGroupItem>
            <ListGroupItem disabled tag="a" href="#" action>
              Vestibulum at eros
            </ListGroupItem>
          </ListGroupItem>
        </div>
      </div>
    );
  }
}
export default ListMenu;
