import React, {Component} from 'react'

export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        static component = null
        state = { Component: AsyncComponent.Component }

        componentWillMount(){
            if(!this.state.Component) {
                getComponent(this.state, (st, comp) => {
                    AsyncComponent.Component = comp
                    this.setState({ Component: comp })
                })
            }
        }

        render(){
            const { Component : Comp } = this.state
            if(Comp) {
                return <Comp {...this.props} />
            }
            return null
        }
    }
    return AsyncComponent
}