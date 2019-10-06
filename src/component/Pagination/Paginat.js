import React, { Component } from "react";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  Container
} from "reactstrap";
import "./Paginat.css";
class Paginat extends Component {
  render() {
    return (
      <Container>
        <div>
          <Pagination
            className="form-paginat"
            size="lg"
            aria-label="Page navigation example"
          >
            <PaginationItem>
              <PaginationLink previous href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink next href="#" />
            </PaginationItem>
          </Pagination>
          <Paginat />
        </div>
      </Container>
    );
  }
}
export default Paginat;
