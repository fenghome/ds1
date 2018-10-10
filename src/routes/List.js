import React from 'react';
import { Breadcrumb,Icon,Carousel } from 'antd';
import TagSelect from '../components/TagSelect/TagSelect';
import ListCateRow from '../components/ListCateRow/ListCateRow';
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

const paixu = [
  {key:'jiage',value:'价格',icon:'/38.png'},
  {key:'shangjiashijian',value:'上架时间',icon:'/38.png'}
]

const listCateData =
  {
    title:'床品件套',
    description:'MUJI等品牌制造商出品',
    items:[
      {
        name:'轻奢·蕨之语提花四件套',
        tag:'新品',
        tagColor:'#e36844',
        price:50,
        desc:'400根如绸臻密，提花精致层次感'
      },
      {
        name:'轻奢·蕨之语提花四件套',
        selectable:"3色可选",
        price:50,
        desc:'400根如绸臻密，提花精致层次感'
      },
      {
        name:'轻奢·蕨之语提花四件套',

        price:50,
        desc:'400根如绸臻密，提花精致层次感'
      },
      {
        name:'轻奢·蕨之语提花四件套',

        price:50,
        desc:'400根如绸臻密，提花精致层次感'
      },
      {
        name:'轻奢·蕨之语提花四件套',

        price:50,
        desc:'400根如绸臻密，提花精致层次感'
      }
    ]
  }



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
      <TagSelect cates={cates} title="配送地区" />
      <TagSelect cates={paixu} title="排序" />
      <ListCateRow listItems={listCateData} />
      </div>
    )
  }

}

export default List;
