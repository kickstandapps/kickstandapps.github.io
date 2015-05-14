---
layout: page
permalink: /support/
title: Support
tagline: At your service
modified: 2013-12-26
description: "Support, at your service"
tags: [support]
---

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/form.min.css">

We really don't want you to have problems with any of our apps. But nothing's perfect and if something does go wrong, we want to get you back up and running as quick as possible. You can also always send an email to support@kickstandapps.com and we'll take a look at the issue as soon as we can.

<p class="success" id="success"><strong>Success! You&#160;should&#160;hear&#160;back&#160;soon!</strong></p>

<form id="form1" name="form1" class="page" autocomplete="off" enctype="multipart/form-data" method="post" action="http://getsimpleform.com/messages?form_api_token=48f7cc30ac36abc6c2e0a16cee14ec79">
	<ul>
		<li>
			<input type='hidden' name='redirect_to' value="{{ site.url }}{{ site.baseurl }}/support/?success" />
		</li>
		<li id="foli1" class="notranslate      ">
			<label class="desc" id="title1" for="Field1"> Name </label>
			<div>
				<input id="Field1" name="Name" type="text" class="field text medium" value="" maxlength="255" tabindex="1" onkeyup="" />
			</div>
		</li>
		<li id="foli2" class="notranslate      ">
			<label class="desc" id="title2" for="Field2"> Email Address <span id="req_2" class="req">*</span> </label>
			<div>
				<input id="Field2" name="Email" type="email" spellcheck="false" class="field text large" value="" maxlength="255" tabindex="2" required />
			</div>
			<p class="instruct" id="instruct2"><small>Your email address will remain private and won't be shared with anyone.</small></p>
		</li>
		<li id="foli4" class="notranslate      ">
			<label class="desc" id="title4" for="TextBox"> Please describe the problem <span id="req_4" class="req">*</span> </label>
			<div>
				<textarea id="TextBox" name="Issue" class="field textarea medium" spellcheck="true" rows="10" cols="50" tabindex="4" onkeyup="" required></textarea>
			</div>
		</li>
		<li>
			<input id="Validate" name="Validate" type="hidden" class="field text large" value="" maxlength="255" tabindex="6" />
		</li>
		<li class="buttons ">
			<div>
				<input id="saveForm" class="btn" tabindex="5" type="submit" value="Send Message"
				/>
			</div>
		</li>
	</ul>
</form>
