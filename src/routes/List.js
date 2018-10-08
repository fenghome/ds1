import React from 'react';
import { Breadcrumb,Icon,Carousel } from 'antd';
import TagSelect from '../components/TagSelect/TagSelect';

const cates = [
  { key: 'chuangpintaojian', value: '床品套件' },
  { key: 'beizhen', value: '被枕 ' },
  { key: 'jiaju', value: '家具' },
  { key: 'dengju', value: '灯具' },
  { key: 'chuangpintaojian', value: '床品套件' },
  { key: 'beizhen', value: '被枕 ' },
  { key: 'jiaju', value: '家具' },
  { key: 'dengju', value: '灯具' },
  { key: 'chuangpintaojian', value: '床品套件' },
  { key: 'beizhen', value: '被枕 ' },
  { key: 'jiaju', value: '家具' },
  { key: 'dengju', value: '灯具' },
  { key: 'chuangpintaojian', value: '床品套件' },
  { key: 'beizhen', value: '被枕 ' },
  { key: 'jiaju', value: '家具' },
  { key: 'dengju', value: '灯具' },
  { key: 'chuangpintaojian', value: '床品套件' },
  { key: 'beizhen', value: '被枕 ' },
  { key: 'jiaju', value: '家具' },
  { key: 'dengju', value: '灯具' }
]


class List extends React.Component {

  render() {
    const breadcrumbs =  [{ key: 'shouye', value: '首页' },{ key: 'jujia', value: '居家',}]
    return (
      <div>
        <Breadcrumb separator={<Icon type="right" theme="outlined" />}>
          {
            breadcrumbs && breadcrumbs.map(item=>(
              <Breadcrumb.Item key={item.key}><a>{item.value}</a></Breadcrumb.Item>
            ))
          }
        </Breadcrumb>
        <Carousel autoplay >
        <div><img src="/banner1.jpg"  /></div>
        <div><img src="/banner2.jpg" /></div>
      </Carousel>
      <TagSelect cates={cates} title="分类" />
      </div>
    )
  }

}

export default List;
