let stateCheck=setInterval(()=>{"complete"===document.readyState&&(clearInterval(stateCheck),$("#drive_main_page").append('<div id="drive_download"><img src="data:image/png;base64,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" /></div>'),$("#drive_main_page").append('<div id="drive_download_box"><div id="drive_download_close">x</div><div id="drive_download_title">Download box</div><div id="drive_download_status_box"><span id="drive_download_status">0</span>/<span id="drive_download_total">0</span> Files</div><div class="tab-wrap"><input type="radio" id="tab1" name="tabGroup1" class="tab" checked><label for="tab1">medium (<span id="drive_download_medium_count">0</span>)</label><input type="radio" id="tab2" name="tabGroup1" class="tab"><label for="tab2">hd720 (<span id="drive_download_hd720_count">0</span>)</label><input type="radio" id="tab3" name="tabGroup1" class="tab"><label for="tab3">hd1080 (<span id="drive_download_hd1080_count">0</span>)</label><input type="radio" id="tab4" name="tabGroup1" class="tab"><label for="tab4">large (<span id="drive_download_large_count">0</span>)</label><div class="tab__content"><textarea id="drive_download_medium"></textarea></div><div class="tab__content"><textarea id="drive_download_hd720"></textarea></div><div class="tab__content"><textarea id="drive_download_hd1080"></textarea></div><div class="tab__content"><textarea id="drive_download_large"></textarea></div><div id="drive_download_note">- Bôi đen tất cả link trong ô trên -> click chuột phải -> chọn "Download selected links with IDM" hoặc chức năng tương tự </div></div><div id="drive_download_button_outsite"><button id="drive_download_button">Getlink</button><div>(Nếu lỗi hãy nhấn F5 để reload lại trang và thử lại)</div></div><div id="drive_download_copyright"><a target="_blank" href="https://www.facebook.com/groups/j2team.community">J2team Community</a> - Reup by <a target="_blank" href="https://www.qthang.net/">QThang.net</a></div></div>'),$("#drive_download_close").click(function(){$("#drive_download_box").slideUp("slow")}),$("#drive_download").click(function(){var e=$(".iZmuQc").find(".WYuW0e").length;$("#drive_download_total").html(e),$("#drive_download_box").slideDown("slow")}),$("#drive_download_button").click(function(){a()}))},100);function a(){var e=new localStorageDB("j2team",localStorage);e.tableExists("video")||(e.createTable("video",["idfile","name","quality","url"]),e.commit()),e.truncate("video"),e.commit(),$(".iZmuQc").find(".WYuW0e").length>0?jrun(0):alert("Không tím thấm link cần download. Vùi lòng truy cập vào folder cần getlink!\n\nHoặc liên hệ admin nếu bạn cho là lỗi. Xin cảm ơn!")}function jrun(e){var d=$(".iZmuQc").find(".WYuW0e:eq("+e+")").data("id"),a=$(".iZmuQc").find(".WYuW0e").length,t=new localStorageDB("j2team",localStorage),n=function(e){var d={};return e.split("&").forEach(function(e){d[decodeURIComponent(e.substring(0,e.indexOf("=")))]=decodeURIComponent(e.substring(e.indexOf("=")+1))}),d};$("#drive_download_button").html("Đang phân tích"),$("#drive_download_status").html(e+1),$.ajax({type:"GET",url:"https://drive.google.com/get_video_info?docid="+d,data:null,async:!0,success:function(o){"ok"==(o=n(o)).status&&("string"==typeof o.url_encoded_fmt_stream_map&&(o.url_encoded_fmt_stream_map=function(e){var d=[];return e.split(",").forEach(function(e){d.push(n(e))}),d}(o.url_encoded_fmt_stream_map)),o.url_encoded_fmt_stream_map.forEach(function(e){o.title=o.title.replace(/\+/g," "),t.insert("video",{idfile:d,name:o.title,quality:e.quality,url:e.url}),t.commit()})),++e===a?($("#drive_download_button").html("Getlink"),b()):jrun(e)}})}function b(){var e=new localStorageDB("j2team",localStorage),d=e.queryAll("video",{query:{quality:"medium"}});$("#drive_download_medium_count").html(d.length),$.each(d,function(e,d){$("#drive_download_medium").append(d.url+"&filename="+encodeURI(d.name)+".mp4\n")});var a=e.queryAll("video",{query:{quality:"hd720"}});$("#drive_download_hd720_count").html(a.length),$.each(a,function(e,d){$("#drive_download_hd720").append(d.url+"&filename="+encodeURI(d.name)+".mp4\n")});var t=e.queryAll("video",{query:{quality:"hd1080"}});$("#drive_download_hd1080_count").html(t.length),$.each(t,function(e,d){$("#drive_download_hd1080").append(d.url+"&filename="+encodeURI(d.name)+".mp4\n")});var n=e.queryAll("video",{query:{quality:"large"}});$("#drive_download_large_count").html(n.length),$.each(n,function(e,d){$("#drive_download_large").append(d.url+"&filename="+encodeURI(d.name)+".mp4\n")})}