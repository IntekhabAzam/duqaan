export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
       
        {
            name: 'smallTagline',
            title: 'SmallTagline',
            type: 'string',
        },
        {
            name: 'largeTagline',
            title: 'LargeTagline',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        }
    ],
  };