# _react-native-text-hypertext_

```
Alpha
```
Create a <Text> tag with hypertext inside it using <a> tag on the text it receives

### Installation
```bash
npm install --save react-native-text-hypertext
```

### Import
```javascript
import HyperText from 'react-native-text-hypertext'
```

### Usage
```javascript
<HyperText linkColor='#007AB8' linkSize='16'>
    {'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book <a href="www.example.com">please accept our terms and conditions</a>'}
</HyperText>
```

## Important

links must look like this where the url is inside the href
```
<a href="www.example.com">please accept our terms and conditions</a>
```