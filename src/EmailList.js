import React from 'react';
import { IconButton, Checkbox } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SettingsIcon from '@material-ui/icons/Settings';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import './EmailList.css';
import Section from './Section';
import EmailRow from './EmailRow';

function EmailList() {
	return (
		<div className="emailList">
			<div className="emailList_settings">
				<div className="emailList_settingsLeft">
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>

				<div className="emailList_settingsRight">
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>

			<div className="emailList_sections">
				<Section Icon={InboxIcon} title="Primary" color="red" selected />
				<Section Icon={PeopleIcon} title="Social" color="1A73E8" />
				<Section Icon={LocalOfferIcon} title="Promotions" color="green" />
			</div>

			<div className="emailList_list">
				<EmailRow title="Test" subject="Hopefully" description="This" time="10pm" />
				<EmailRow
					title="Hello there"
					subject="Driving"
					description="Drivers course test"
					time="7pm"
				/>
			</div>
		</div>
	);
}

export default EmailList;
