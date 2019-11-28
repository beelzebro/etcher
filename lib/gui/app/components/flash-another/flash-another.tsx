/*
 * Copyright 2018 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import styled from 'styled-components';
import { position, right } from 'styled-system';
import { BaseButton, ThemedProvider } from '../../styled-components';

const Div: any = styled.div`
	${position}
	${right}
`;

const FlashAnother = ({ onClick, ...props }: any) => {
	return (
		<ThemedProvider {...props} marginTop="21px">
			<Div>
				<BaseButton
					primary
					onClick={onClick.bind(null, { preserveImage: true })}
				>
					Flash Another
				</BaseButton>
			</Div>
		</ThemedProvider>
	);
};

export default FlashAnother;