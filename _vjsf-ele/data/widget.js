export default {
    title: '文件上传',
    type: 'object',
    description: '文件上传 使用 el-upload组件，支持所有的 el-upload 参数，<br/>slot 可以通过 slots参数传入数组VNode list',
    properties: {
      imgUrl: {
        title: '单个图片',
        type: 'string',
        default: 'http://img.alicdn.com/tfs/TB1vYlkdnZmx1VjSZFGXXax2XXa-468-644.jpg_320x5000q100.jpg_.webp',
        'ui:action': 'https://run.mocky.io/v3/518d7af7-204f-45ab-9628-a6e121dab8ca',
        'ui:widget': 'UploadWidget',
        'ui:slots': {
          default(h) {
            return h('el-button', {
              slot: 'default',
              props: {
                size: 'mini',
                type: 'primary'
              },
            }, ['上传图片'])
          },
          tip(h) {
            return h('div', {
              slot: 'tip',
              style: {
                fontSize: '12px',
                color: '#666'
              }
            }, ['注：请上传100 * 100尺寸的图片'])
          },
        }
      },
      imgUrlList: {
        title: '多图',
        type: 'array',
        'ui:action': 'https://run.mocky.io/v3/518d7af7-204f-45ab-9628-a6e121dab8ca',
        'ui:btnText': '重新设置上传按钮文字',
        'ui:widget': 'UploadWidget',
        // eslint-disable-next-line max-len
        default: ['http://img.alicdn.com/tfs/TB1vYlkdnZmx1VjSZFGXXax2XXa-468-644.jpg_320x5000q100.jpg_.webp'],
        items: {
          type: 'string',
        }
      }
    }
  }