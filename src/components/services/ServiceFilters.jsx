import React, { Component } from 'react';
import './ServiceFilters.css';
import { translate } from '../../helpers/language';
import Checkbox from '../widgets/Checkbox.jsx';

class ServiceFilters extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    //console.log('shouldComponentUpdate', nextProps, nextState);
    const propsToCauseRender = [
      'hideFilters',
      'serviceSortOrder',
      'howManyServiceWarning',
      'howManyServicePending',
      'howManyServiceUnknown',
      'howManyServiceCritical',
      'howManyServiceAcked',
      'howManyServiceScheduled',
      'howManyServiceFlapping'
    ];
    for(let i=0;i<propsToCauseRender.length;i++) {
      if (nextProps[propsToCauseRender[i]] !== this.props[propsToCauseRender[i]]) {
        return true;
      }
    }
    return false;
  }

  render() {
    
    const language = this.props.language;

    return (
      <>

        {!this.props.hideFilters && <select value={this.props.serviceSortOrder} varname={'serviceSortOrder'} onChange={this.props.handleSelectChange}>
          <option value="newest">{translate('newest first', language)}</option>
          <option value="oldest">{translate('oldest first', language)}</option>
        </select>}

        &nbsp;

        {(!this.props.hideFilters || this.props.howManyServiceCritical !== 0) && <Checkbox
          className={this.props.howManyServiceCritical ? 'Checkbox critical uppercase' : 'Checkbox critical uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServiceCritical'}
          defaultChecked={!this.props.settingsObject.hideServiceCritical}
          howMany={this.props.howManyServiceCritical}
          howManyText={translate('critical', language)}
        />}
        &nbsp;
        {(!this.props.hideFilters || this.props.howManyServiceWarning !== 0) && <Checkbox
          className={this.props.howManyServiceWarning ? 'Checkbox warning uppercase' : 'Checkbox warning uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServiceWarning'}
          defaultChecked={!this.props.settingsObject.hideServiceWarning}
          howMany={this.props.howManyServiceWarning}
          howManyText={translate('warning', language)}
        />}
        &nbsp;
        {(!this.props.hideFilters || this.props.howManyServiceUnknown !== 0) && <Checkbox
          className={this.props.howManyServiceUnknown ? 'Checkbox unknown uppercase' : 'Checkbox unknown uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServiceUnknown'}
          defaultChecked={!this.props.settingsObject.hideServiceUnknown}
          howMany={this.props.howManyServiceUnknown}
          howManyText={translate('unknown', language)}
        />}
        &nbsp;
        {(!this.props.hideFilters || this.props.howManyServicePending !== 0) && <Checkbox
          className={this.props.howManyServicePending ? 'Checkbox pending uppercase' : 'Checkbox pending uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServicePending'}
          defaultChecked={!this.props.settingsObject.hideServicePending}
          howMany={this.props.howManyServicePending}
          howManyText={translate('pending', language)}
        />}
        &nbsp;
        {(!this.props.hideFilters || this.props.howManyServiceAcked !== 0) && <Checkbox
          className={this.props.howManyServiceAcked ? 'Checkbox acked uppercase' : 'Checkbox acked uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServiceAcked'}
          defaultChecked={!this.props.settingsObject.hideServiceAcked}
          howMany={this.props.howManyServiceAcked}
          howManyText={translate('acked', language)}
        />}

        &nbsp;
        
        {(!this.props.hideFilters || this.props.howManyServiceScheduled !== 0) && <Checkbox
          className={this.props.howManyServiceScheduled ? 'Checkbox scheduled uppercase' : 'Checkbox scheduled uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServiceScheduled'}
          defaultChecked={!this.props.settingsObject.hideServiceScheduled}
          howMany={this.props.howManyServiceScheduled}
          howManyText={translate('scheduled', language)}
        />}
        
        &nbsp;
        {(!this.props.hideFilters || this.props.howManyServiceFlapping !== 0) && <Checkbox
          className={this.props.howManyServiceFlapping ? 'Checkbox flapping uppercase' : 'Checkbox flapping uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServiceFlapping'}
          defaultChecked={!this.props.settingsObject.hideServiceFlapping}
          howMany={this.props.howManyServiceFlapping}
          howManyText={translate('flapping', language)}
        />}

        &nbsp;
        {(!this.props.hideFilters || this.props.howManyServiceSoft !== 0) && <Checkbox
          className={this.props.howManyServiceSoft ? 'Checkbox soft uppercase' : 'Checkbox soft uppercase dim'}
          handleCheckboxChange={this.props.handleCheckboxChange}
          stateName={'hideServiceSoft'}
          defaultChecked={!this.props.settingsObject.hideServiceSoft}
          howMany={this.props.howManyServiceSoft}
          howManyText={translate('soft', language)}
        />}

      </>
    );
  }
}

export default ServiceFilters;