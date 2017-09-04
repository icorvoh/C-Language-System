/**
 * Created by hanyile on 2017/8/15.
 */

import React from 'react'
import { Container, Table, Icon, Header, Form, Select, Button, Menu, Segment } from 'semantic-ui-react'

const ListWrap = () => (
    <Container className="ListContainer">
      <Segment className="ListSegment">

        {/*<Dimmer active inverted>*/}
        {/*<Loader indeterminate>Loading the data</Loader>*/}
        {/*</Dimmer>*/}

        <Header as='h1' style={{textAlign: 'center'}}>History</Header>

        <Form>
          <Form.Field control={Select} label='Type' options={[
            {key: 'al', text: 'All Type', value: 'al'},
            {key: 'ho', text: 'Home Work', value: 'ho'},
            {key: 'co', text: 'Couse Work', value: 'co'},
            {key: 'cl', text: 'Class Work', value: 'cl'},
            {key: 'ot', text: 'Other', value: 'ot'},
          ]} placeholder='Select Your Work Type' />
          <Form.Group widths='equal'>
            <Form.Field control={Select} label='From Date' options={[
              {key: 'fd', text: '2017-08-01', value: 'fd'}
            ]} placeholder='Select Date' className="ListDateField"/>
            <Form.Field control={Select} label='To' options={[
              {key: 'td', text: '2017-08-01', value: 'td'}
            ]} placeholder='Select Date' className="ListDateField"/>
          </Form.Group>
        </Form>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Submit Time</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Rating</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>A</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>2017-08-01</Table.Cell>
              <Table.Cell>Home Work</Table.Cell>
              <Table.Cell>C Language System</Table.Cell>
              <Table.Cell>-</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    </Container>
)

export default ListWrap