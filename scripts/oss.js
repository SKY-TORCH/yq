let OSS = require('ali-oss')

let client = new OSS({
  accessKeyId: 'LTAI4FbqqwU74pYmze46Mgpa',
  accessKeySecret: '9PSbm4xvprKIYtW4oSzJ89HmlYTtQ9',
  region: 'oss-cn-chengdu',
  bucket: 'wxyq',
  timeout: '120s'
});

async function putBucketWebsite () {
  try {
    let result = await client.putBucketWebsite('wxyq', {
    index: 'index.html',
    error: 'index.html',
  });
   console.log(result);
  } catch (e) {
    console.log(e);
  }
}

putBucketWebsite();
