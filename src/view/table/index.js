import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import DataGrid, { Column, Pager, Paging, Summary,TotalItem } from 'devextreme-react/data-grid';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';

const dataSource = AspNetData.createStore({
  key: 'id',
  loadUrl: 'https://api.github.com/users?page=10&per_page=100',
});

class Tabel extends React.Component {

  render() {
    return (
      <DataGrid
        height={550}
        dataSource={dataSource}
        showBorders={true}
      >
        <Paging defaultPageSize={10} />
        <Pager visible={true}
        />

        <Column dataField="avatar_url" cellRender={this.renderGridCell} alignment= 'center' width={150}/>
        <Column dataField="login" />
        <Column dataField="site_admin" dataType='string'>
        </Column>
        <Summary>
          <TotalItem
            column="avatar_url"
            summaryType="count" />
        </Summary>
      </DataGrid>
    );
  }
  renderGridCell(cellData) {
    return (<div><img className='tabel_img' src={cellData.value} alt={cellData.key}></img></div>);
  }
}

export default Tabel;