<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
    <a href="https://vercel.com/storage/blob">
    <picture>
  <img alt="Vercel Blob" width="55" src="https://images.ctfassets.net/e5382hct74si/2jMsBMtgO2wGha932L0RIP/1d75c059b7b332ffa0a7e126b29ea346/Blob-Active-Desktop-Dark.svg">
  </picture>
  </a>
</p>

<h1 align="center">
  Medusa Plugin <a target="_blank" href="https://vercel.com/storage/blob">Vercel Blob</a> File Storage
</h1>

<p align="center">
  Easy uploads for edge-delivered files
</p>
<p>
The simplest way to store and access media files on a global network. Perfect for unstructured data like images, videos, and audio files.
</p>

## Configure
>medusa-config.js
```
{
    resolve: "medusa-plugin-blob",
    options: {
      token: "{BLOB_READ_WRITE_TOKEN}",
    }
}
```


