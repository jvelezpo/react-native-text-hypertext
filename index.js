import React, { Component } from 'react'
import { Text, Linking } from 'react-native'

export default class ReactNativeTextHypertex extends React.Component {

  render() {
    var content = []

    if ((typeof this.props.children) === 'string') {

      links = this.props.children.match(/<a[^>]*>[^<]*<\/a>/g)
      theText = this.props.children
      urls = []
      indexOf = 0
      lastIndexOf = 0

      if (links !== null) {
        links.forEach((link, i) => {
          href = link.match(/href=["|'](.+)["|']/)
          text = link.match(/<a[^>]*>([^<]+)<\/a>/)

          urls[i] = (href === null ? '#' : href[1])
          linkToInsert = (
            <Text
              key={i}
              onPress={() => (urls[i] === '#' ? console.log('empty url') : Linking.openURL(urls[i]))} 
              style={{
                color: this.props.linkColor,
                fontSize: parseInt(this.props.linkSize)
                }}>
              {text === null ? '' : text[1]}
            </Text>
          );

          indexOf = theText.indexOf(link.toString())
          lastIndexOf = indexOf + link.toString().length

          if (indexOf !== 0) {
            content.push(theText.slice(0, indexOf))
          }
          content.push(linkToInsert)
          theText = theText.slice(lastIndexOf, theText.length)
        })
      }

      // Pushes any text if there is some at the end after the last link
      content.push(theText)
    } else {
      console.warn('Attempted to use <HyperText> with nested components. ' +
                   'This component only supports plain text children.');
      return <Text {...this.props} />;
    }

    return (
      <Text {...this.props}>
        {content}
      </Text>
    );
  }
}
