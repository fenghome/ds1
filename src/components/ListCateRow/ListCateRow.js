import React from 'react';
import { Row,Col,Card,Divider } from 'antd';
import style from './listCateRow.less';

class ListCateRow extends React.Component{

    render(){
        const { listItems } = this.props;
        return(
            <div className={style.listItems}>
                <div className={style.title}>{listItems.title}</div>
                <div className={style.description}>{listItems.description}</div>
                <Row className={style.items} gutter={8}>
                    {
                        listItems && listItems.items.map(item=>(
                            <Col span={6}>
                                <Card
                                    className={style.card}
                                    hoverable
                                    bodyStyle={{padding:8}}
                                    cover={<img alt="example" src="list1.png" className={style.cover}/>}
                                >
                                    <div className={style.tagLine}>
                                        {
                                            item.tag && (
                                            <div className={style.tag} style={{background:item.tagColor}}>
                                                {item.tag}
                                            </div>
                                            )
                                        }
                                    </div>
                                    <div className={style.itemName}>{item.name}</div>
                                    <div className={style.itemPrice}>¥{item.price}</div>
                                    <div className={style.divider} />
                                    <div className={style.itemDesc}>{item.desc}</div>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        )
    }
}

export default ListCateRow;
