/*
 * Copyright © 2020 Cask Data, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

import { WithStyles } from '@material-ui/core/styles/withStyles';
import { styles } from 'components/AbstractWidget/RadioGroupWidget';
import Heading, { HeadingTypes } from 'components/Heading';
import JsonMenu from 'components/PluginJSONCreator/Create/Content/JsonMenu';
import PluginInput from 'components/PluginJSONCreator/Create/Content/PluginInput';
import StepButtons from 'components/PluginJSONCreator/Create/Content/StepButtons';
import {
  CreateContext,
  createContextConnect,
  ICreateContext,
} from 'components/PluginJSONCreator/CreateContextConnect';
import * as React from 'react';

const OutputsView: React.FC<ICreateContext & WithStyles<typeof styles>> = ({
  classes,
  pluginName,
  pluginType,
  displayName,
  emitAlerts,
  emitErrors,
  configurationGroups,
  groupToInfo,
  groupToWidgets,
  widgetInfo,
  widgetToAttributes,
  jsonView,
  setJsonView,
  outputName,
  setOutputName,
  setPluginState,
  JSONStatus,
  setJSONStatus,
}) => {
  const [localOutputName, setLocalOutputName] = React.useState(outputName);

  function saveAllResults() {
    setOutputName(localOutputName);
  }

  return (
    <div>
      <JsonMenu
        pluginName={pluginName}
        pluginType={pluginType}
        displayName={displayName}
        emitAlerts={emitAlerts}
        emitErrors={emitErrors}
        configurationGroups={configurationGroups}
        groupToInfo={groupToInfo}
        groupToWidgets={groupToWidgets}
        widgetInfo={widgetInfo}
        widgetToAttributes={widgetToAttributes}
        jsonView={jsonView}
        setJsonView={setJsonView}
        outputName={outputName}
        setPluginState={setPluginState}
        JSONStatus={JSONStatus}
        setJSONStatus={setJSONStatus}
      />
      <Heading type={HeadingTypes.h3} label="Output" />
      <br />
      <PluginInput
        widgetType={'textbox'}
        value={localOutputName}
        onChange={setLocalOutputName}
        label={'Output Name'}
        placeholder={'output name'}
        required={false}
      />
      <StepButtons nextDisabled={false} onPrevious={saveAllResults} onNext={saveAllResults} />
    </div>
  );
};

const Outputs = createContextConnect(CreateContext, OutputsView);
export default Outputs;