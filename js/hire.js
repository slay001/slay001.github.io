$(function(){

		$.ajaxSetup({async:false});

		function unitStruct() {
			var name, num;
		}

		function hireStruct() {
			var pickupNum, ssrPool;
		}

		// 채용 리스트 초기화
		$.getJSON("./json/hire.json", function(data) {

			data.pickupHire.forEach(function(el){
				var innerHTML = "";
				innerHTML += "<input type='radio' class='btn-check' name='hire-type-radio' id='"+el.pickupNum+"-hire' autocomplete='off' pickupNum='"+el.pickupNum+"' hireType='pickup'>";
				innerHTML += "<label class='btn btn-outline-primary' for='"+el.pickupNum+"-hire'>"+el.pickupName+"</label>";

				$(".btn-group.hire-type").prepend(innerHTML);

			});

			data.hiddenHire.forEach(function(el){
				var innerHTML = "";
				innerHTML += "<li>";
				innerHTML +=	"<input type='radio' class='btn-check dropdown-item hidden-hire' name='hire-type-radio' id='hidden-hire' autocomplete='off' pickupNum='"+el.pickupNum+"' hireType='hidden'>";
				innerHTML +=	"<label for='hidden-hire'>" + el.pickupName + "</label>";
				innerHTML += "</li>";

				$(".hidden-hire-menu").append(innerHTML);
			});
		});

		// 픽업캐릭터 설정
		$(".hidden-hire-menu li label").click(function(){
			var pickupNum = $(this).siblings("#hidden-hire").attr("pickupNum");

			$("#nowPickupNum").val(pickupNum);

			hiddenList.forEach(function(el){
				if(el.num == pickupNum){
					$(".hire-pickup-char").text(el.name);
					return true;
				};
			});
		});

		$(".hire-type input[type='radio']").click(function(){

			var pickupNum = $(this).attr("pickupNum");

			ssrList.forEach(function(el){
				if(el.num == pickupNum){
					$(".hire-pickup-char").text(el.name);
					$("#nowPickupNum").val(pickupNum);
					return true;
				};
			})

		})

		var ssrList = [];
		var srList = [];
		var rList = [];
		var nList = [];
		var hiddenList = [];

		// 각성유닛 전체 리스트 초기화
		$.getJSON("./json/unit.json", function(data) {
			data.hidden.forEach(function(el){
				var hiddenUnit = new unitStruct();
				hiddenUnit.name = el.name;
				hiddenUnit.num = el.num;

				hiddenList.push(hiddenUnit);
			});
		});

		// 유닛 전체 리스트 초기화
		$.getJSON("./json/unit.json", function(data) {
			data.SSR.forEach(function(el){
				var ssrUnit = new unitStruct();
				ssrUnit.name = el.name;
				ssrUnit.num = el.num;

				ssrList.push(ssrUnit);
			});

			data.SR.forEach(function(el){
				var srUnit = new unitStruct();
				srUnit.name = el.name;
				srUnit.num = el.num;

				srList.push(srUnit);
			});

			data.R.forEach(function(el){
				var rUnit = new unitStruct();
				rUnit.name = el.name;
				rUnit.num = el.num;

				rList.push(rUnit);
			});

			data.N.forEach(function(el){
				var nUnit = new unitStruct();
				nUnit.name = el.name;
				nUnit.num = el.num;

				nList.push(nUnit);
			});
		});

		$.ajaxSetup({async:true});

		// 소모 재화, 뽑은 레어도
		var hireCount = 0;
		var useQuartz = 0;
		var ssrCount = 0;
		var srCount = 0;
		var rCount = 0;
		var nCount = 0;
		
		// 천장
		var ceilingCount = 150;
		
		// 레어도 풀
		var ssrPool = [];
		var srPool = [];
		var rPool = [];
		var nPool = [];
		
		// 레어도 확률
		var ssrPercent = 0;
		var srPercent = 0;
		var rPercent = 0;
		var nPercent = 0;
		
		$("input[name='hire-type-radio']").change(function(){
			var changedType = $('input[name="hire-type-radio"]:checked').attr('hireType');

			charPoolReset();
			gachaReset();
			$("#red-fish-check").prop("checked", false);
			
			$("#hidden-hire-group").css('background-color','white').css('color','#0d6efd');
			
			if(changedType == 'hidden'){
				// 기밀 채용
				$(".hire-percent").text("SSR 3.5% SR 15% R 81.5% N 0%");
				$(".hire-term").text("");
				$(".goods-type").text("기채권");
				
				// 천장 표시
				$(".ceiling").show();
				
				$("#hidden-hire-group").css('background-color','#0d6efd').css('color','white');
				
				ssrPercent = 3.5;
				srPercent = 15;
				rPercent = 81.5;
				nPercent = 0;
				
				srPool.push('신비한 금태');
				rPool.push('신비한 상연');
				
			}else if(changedType == 'operator'){
				// 오퍼레이터 수시채용
				$(".hire-percent").text("SSR 2% SR 8% R 35% N 55%");
				$(".hire-term").text("");
				$(".hire-pickup-char").text("없음");
				$(".goods-type").text("쿼츠");
				
				// 천장 숨김
				$(".ceiling").hide();
				
				ssrPercent = 2;
				srPercent = 8;
				rPercent = 35;
				nPercent = 55;
				
				ssrPool.push('세리나 크루');
				ssrPool.push('김하나');
				ssrPool.push('리플레이서 킹 ');
				ssrPool.push('시그마 ');
				ssrPool.push('모네카');
				ssrPool.push('맨션 마스터');
				ssrPool.push('세리나 크루');
				ssrPool.push('이수연 ');
				ssrPool.push('올리비에 박');
				ssrPool.push('아나스타샤 체르노바');
				ssrPool.push('클로에 스타시커');
				ssrPool.push('레나 맥켄지');
				
				srPool.push('장 웨이');
				srPool.push('마크 핀리');
				srPool.push('이윤정');
				srPool.push('나희린');
				
				rPool.push('리플레이서 사령관');
				rPool.push('라임');
				
				nPool.push('아카데미 상급생');
				nPool.push('보급형 오토마타');
			}else if(changedType == 'pickup'){
				// 픽업채용
				$(".hire-percent").text("SSR 3.5% SR 15% R 81.5% N 0%");
				$(".hire-term").text("");
				$(".goods-type").text("쿼츠");

				// 천장 표시
				$(".ceiling").show();

				ssrPercent = 3.5;
				srPercent = 15;
				rPercent = 81.5;

			}else if(changedType == 'always'){
				// 수시채용
				$(".hire-percent").text("SSR 3.5% SR 15% R 81.5% N 0%");
				$(".hire-term").text("");
				$(".hire-pickup-char").text("없음");
				$(".goods-type").text("쿼츠");
				
				// 천장 숨김
				$(".ceiling").hide();
				
				ssrPercent = 3.5;
				srPercent = 15;
				rPercent = 81.5;

				ssrPool = ssrList;
			}
			
		})
		
		// 기밀 채용 하위메뉴 선택
		$("label[for='hidden-hire']").click(function(){
			$(".hire-pickup-char").text($(this).text());
			gachaReset();
		})
		
		// navbar active설정
		$(".navbar-nav li:nth-child(5) a").addClass("active");
		
		// 가장 첫 채용을 기본선택
		$(".hire-type > input:nth-child(1)").click();
		
		// 1회 채용
		$(".hire-1").click(function(){
			hireCount += 1;
			
			var changedType = $('input[name="hire-type-radio"]:checked').attr('hireType');
			
			if(changedType == 'hidden'){
				useQuartz += 20;
			}else{
				useQuartz += 150;
			}
			
			$(".hire-result ul").empty();
			gacha();
			updateUseGoods();
		})
		
		// 10회 채용
		$(".hire-10").click(function(){
			hireCount += 10;
			
			var changedType = $('input[name="hire-type-radio"]:checked').attr('hireType');
			
			if(changedType == 'hidden'){
				useQuartz += 200;
			}else{
				useQuartz += 1500;
			}
			
			$(".hire-result ul").empty();
			for(var i=0; i<10; i++){
				gacha();
			}
			
			updateUseGoods();
		})
		
		// 초기화
		$(".hire-reset").click(function(){
			if(confirm("초기화 하시겠습니까?")){
				gachaReset();
			}
		})

		// 홍어버튼 반대쪽 체크해제
		$("#red-fish-check").click(function(){
			$("#red-fish-check2").prop("checked", false);
		})
		$("#red-fish-check2").click(function(){
			$("#red-fish-check").prop("checked", false);
		})
		
		// 채용 목록
		$(".hire-info").click(function(){
			var calcedSSRPercent = 0;
			var hasPickup = $(".hire-pickup-char").text() != "없음";
			if(hasPickup) calcedSSRPercent = ((ssrPercent-1) / ssrList.length).toFixed(2);
			else calcedSSRPercent = ((ssrPercent) / ssrList.length).toFixed(2);
			
			var infoHTML = "";
			infoHTML += "<h5>[SSR "+ssrPercent+"%]</h5>";
			infoHTML += "<ul>";
			if(hasPickup){
			infoHTML += 	"<li>" + $(".hire-pickup-char").text() + " (1%)</li>";
			}
			for(var i=0; i<ssrList.length;i++){
			infoHTML += 	"<li>" + ssrList[i].name + " (" + calcedSSRPercent + "%)</li>";
			}
			infoHTML += "</ul>";
			
			infoHTML += "<h5>[SR "+srPercent+"%]</h5>";
			infoHTML += "<ul>";
			for(var i=0; i<srList.length;i++){
			infoHTML += 	"<li>" + srList[i].name + " (" + srPercent/srList.length + "%)</li>";
			}
			infoHTML += "</ul>";
			
			infoHTML += "<h5>[R "+rPercent+"%]</h5>";
			infoHTML += "<ul>";
			for(var i=0; i<rList.length;i++){
			infoHTML += 	"<li>" + rList[i].name + " (" + rPercent/rList.length + "%)</li>";
			}
			infoHTML += "</ul>";
			
			/*infoHTML += "<h5>[N "+nPercent+"%]</h5>";
			infoHTML += "<ul>";
			for(var i=0; i<nList.length;i++){
			infoHTML += 	"<li>" + nList[i] + " (" + nPercent/nList.length + "%)</li>";
			}
			infoHTML += "</ul>";*/
			
			$(".hire-info-modal-body").empty().append(infoHTML);
		})
		
		// 캐릭터 풀 초기화
		function charPoolReset(){
			ssrPool = [];
			srPool = [];
			rPool = [];
			nPool = [];
		}
		
		// 채용 정보 초기화
		function gachaReset(){
			hireCount = 0;
			useQuartz = 0;
			ssrCount = 0;
			srCount = 0;
			rCount = 0;
			nCount = 0;
			ceilingCount = 150;
			
			updateUseGoods();
			updateGetChar();
			$(".hire-result ul").empty();
			$(".hire-ssr-list").empty();
		}
		
		// 채용 1회
		function gacha(){
			var randPercent = parseFloat((Math.random()*100).toFixed(1));
			var selectedPool = null;
			var isPickup = false;
			var isCeiling = false;
			var pickupChar = "";
			var getRarity = "";
			var isRedFish = false;

			// 현재 채용 타입
			var nowHireType = $('input[name="hire-type-radio"]:checked').attr('hireType');
			var hasPickup = $(".hire-pickup-char").text() != "없음";
			
			// 홍어버튼 여부
			if($('#red-fish-check:checked').length == 1){
				isRedFish = true;
			}else{
				isRedFish = false;
			}
			
			if($('#red-fish-check2:checked').length == 1){
				var rand = Math.random()*10;

				if(rand <= 2){
					isRedFish = true;
				}
			}

			if(isRedFish || (randPercent <= ssrPercent || ceilingCount <= 1)){
				
				// 기밀/픽업채용일 경우 
				if(hasPickup){
					var pickupPercent = parseFloat((Math.random()*ssrPercent).toFixed(1));

					if(pickupPercent <= 1 || ceilingCount <= 1){
						isPickup = true;
						pickupChar = $('#nowPickupNum').val();
						
						if(ceilingCount <= 1){
							isCeiling = true;
						}
					}
				}
				
				selectedPool = ssrList;
				getRarity = "ssr";
				ssrCount++;
			}else if(randPercent <= ssrPercent+srPercent){
				selectedPool = srList;
				getRarity = "sr";
				srCount++;
			}else if(randPercent <= ssrPercent+srPercent+rPercent){
				selectedPool = rList;
				getRarity = "r";
				rCount++;
			}else{
				selectedPool = nList;
				getRarity = "n";
				nCount++;
			}
			
			var getChar = "";
			
			if(isPickup){
				getRarity = "pickup";

				if(nowHireType == 'hidden'){
					hiddenList.forEach(function(el){
						if(el.num == pickupChar){
							getChar = el;
							return true;
						}
					})
				} else {
					ssrList.forEach(function(el){
						if(el.num == pickupChar){
							getChar = el;
							return true;
						}
					})
				}
				
				// 천장 횟수 초기화
				ceilingCount = 150;
			}else{
				var pick = Math.floor(Math.random()*selectedPool.length);
				getChar = selectedPool[pick];

				// 픽업캐릭터 겹치면 다시뽑기
				while(getChar.num == pickupChar){
					pick = Math.floor(Math.random()*selectedPool.length);
					getChar = selectedPool[pick];
				};
				
				// 천장 횟수 갱신
				if(hasPickup){
					ceilingCount--;
				}
			}

			var iconImg = "";

			if(getRarity == "n"){
				iconImg = "./img/unit_icon/unit_n.jpg";
			}else if(getRarity == "r"){
				iconImg = "./img/unit_icon/unit_r.jpg";
			}else if(getRarity == "sr"){
				iconImg = "./img/unit_icon/unit_sr.jpg";
			}else if(getRarity == "ssr" && nowHireType == "operator"){
				iconImg = "./img/unit_icon/unit_ssr.jpg";
			}else if(getRarity == "ssr" || getRarity == "pickup"){
				iconImg = "./img/unit_icon/unit_"+getChar.num+".jpg";
			}
			
			var innerHTML = "";
			innerHTML += "<li class='rarity-"+getRarity+"'>";
			innerHTML += 	"<div style='border:1px solid black;'><img src='"+iconImg+"'></div>";
			innerHTML += 	"<div><span>["+getRarity.toUpperCase()+"]</span></div>";
			innerHTML += 	"<div><span>"+getChar.name+"</span></div>";
			if(isCeiling){
			innerHTML += 	"<div><span>(확정채용)</span></div>";
			}
			innerHTML += "</li>";
			
			$(".hire-result ul").append(innerHTML);
			
			if(getRarity == 'ssr' || getRarity == 'pickup'){
				updateHireResult(getChar.name);
			}
			
			updateGetChar();
		}
		
		// 사용 재화 업데이트
		function updateUseGoods(){
			$(".hire-count").text(numberWithComma(hireCount));
			$(".hire-quartz").text(numberWithComma(useQuartz));
			$(".ceiling-count").text(ceilingCount);
		}
		
		// 얻은 레어리티 업데이트
		function updateGetChar(){
			
			if(hireCount == 0){
				$(".ssr-count").text(numberWithComma(ssrCount));
				$(".sr-count").text(numberWithComma(srCount));
				$(".r-count").text(numberWithComma(rCount));
				$(".n-count").text(numberWithComma(nCount));
			}else{
				$(".ssr-count").text(numberWithComma(ssrCount) + "(" + (ssrCount/hireCount*100).toFixed(1)  + "%)");
				$(".sr-count").text(numberWithComma(srCount) + "(" + (srCount/hireCount*100).toFixed(1)  + "%)");
				$(".r-count").text(numberWithComma(rCount) + "(" + (rCount/hireCount*100).toFixed(1)  + "%)");
				$(".n-count").text(numberWithComma(nCount) + "(" + (nCount/hireCount*100).toFixed(1)  + "%)");
			}
		}
		
		// 채용 결과 업데이트
		function updateHireResult(charName){
			var dupCheck = $(".hire-ssr-list li:contains('"+charName+"')");
			
			if(dupCheck.length > 0){
				var split = dupCheck.text().split('(');
				
				if(split.length == 1){
					$(dupCheck).text(dupCheck.text() + " (2)");
				}else{
					split[1] = split[1].slice(0, -1);
					
					$(dupCheck).text(split[0] + " (" + (parseInt(split[1])+1) +")")
				}
			}else{
				$(".hire-ssr-list").append("<li>"+charName+"</li>") 
			}
		}
		
		// 콤마찍기 함수
		function numberWithComma(i){
			return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		}

		$("#always-hire").click();
	})




/* 이전에 사용한 픽업 else if 모음
	else if(changedType == '1staniv-hire'){
					// 1주년 기념 채용
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-term").text("2/2(화) ~ 3/2(화)");
					$(".hire-pickup-char").text("없음");
					$(".goods-type").text("쿼츠");
					
					// 천장 숨김
					$(".ceiling").hide();
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 39;
					nPercent = 42.5;
					
					ssrPool.push('류드밀라');
					ssrPool.push('카린 웡');
					ssrPool.push('에델 마이트너');
					ssrPool.push('레지나 맥크레디');
					ssrPool.push('릴리');
					ssrPool.push('이디스 트윈즈');
					ssrPool.push('가은');
					ssrPool.push('베로니카');
					
					srPool.push('유진');
					srPool.push('린 시엔');
					srPool.push('리브 앨런');
					srPool.push('프레데릭 유마');
					srPool.push('미야');
					srPool.push('실비아 레나 쿠퍼');
					srPool.push('에리어스 에스퀘데');
					srPool.push('라우라 베아트릭스');
					srPool.push('김소빈');
					srPool.push('모네');
					srPool.push('무반동 포병');
					srPool.push('한소림');
					
					rPool.push('신비한 상연');
					nPool.push('신비한 힐데');
					
				}else if(changedType == 'harap-hire'){
					// 하랍 픽업 (임시)
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-term").text("2/16(화) ~ 3/2(화)");
					$(".hire-pickup-char").text("하랍");
					$(".goods-type").text("쿼츠");
					
					// 천장 표시
					$(".ceiling").show();
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 39;
					nPercent = 42.5;
					
					ssrPool.push('주시영');
					ssrPool.push('옌 싱 란체스터');
					ssrPool.push('에델 마이트너');
					ssrPool.push('로자리아 르 프리데');
					ssrPool.push('가은');
					ssrPool.push('신지아');
					ssrPool.push('베로니카');
					ssrPool.push('ATAC-130 건쉽');
					ssrPool.push('ATL-1 링컨');
					
					srPool.push('유진');
					srPool.push('제이크 워커');
					srPool.push('리브 앨런');
					srPool.push('프레데릭 유마');
					srPool.push('로이 버넷');
					srPool.push('김소빈');
					srPool.push('베네딕트 콘스탄틴');
					srPool.push('리우라 베아트릭스');
					srPool.push('에블린 켈러');
					srPool.push('가브리엘 준 더 비셔스브레이커');
					srPool.push('스카우트');
					srPool.push('관리국 총병');
					srPool.push('피스 키퍼');
					srPool.push('HM 다연장 로켓');
					srPool.push('리퍼');

					rPool.push('신비한 상연');
					nPool.push('신비한 힐데');
				}else if(changedType == 'seraph-hire'){
					// 세라펠 픽업 (임시)
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-term").text("3/4(목) ~ 3/16(화)");
					$(".hire-pickup-char").text("세라펠");
					$(".goods-type").text("쿼츠");
					
					// 천장 표시
					$(".ceiling").show();
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 39;
					nPercent = 42.5;
					
					ssrPool.push('주시영');
					ssrPool.push('옌 싱 란체스터');
					ssrPool.push('에델 마이트너');
					ssrPool.push('로자리아 르 프리데');
					ssrPool.push('가은');
					ssrPool.push('신지아');
					ssrPool.push('베로니카');
					ssrPool.push('ATAC-130 건쉽');
					ssrPool.push('ATL-1 링컨');
					
					srPool.push('유진');
					srPool.push('제이크 워커');
					srPool.push('리브 앨런');
					srPool.push('프레데릭 유마');
					srPool.push('로이 버넷');
					srPool.push('김소빈');
					srPool.push('베네딕트 콘스탄틴');
					srPool.push('리우라 베아트릭스');
					srPool.push('에블린 켈러');
					srPool.push('가브리엘 준 더 비셔스브레이커');
					srPool.push('스카우트');
					srPool.push('관리국 총병');
					srPool.push('피스 키퍼');
					srPool.push('HM 다연장 로켓');
					srPool.push('리퍼');

					rPool.push('신비한 상연');
					nPool.push('신비한 힐데');
				}else if(changedType == 'knight-hire'){
					// 리플레이서 나이트 픽업 (임시)
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-term").text("3/16(화) ~ 3/30(화)");
					$(".hire-pickup-char").text("리플레이서 나이트");
					$(".goods-type").text("쿼츠");
					
					// 천장 표시
					$(".ceiling").show();
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 39;
					nPercent = 42.5;
					
					ssrPool.push('주시영');
					ssrPool.push('옌 싱 란체스터');
					ssrPool.push('에델 마이트너');
					ssrPool.push('로자리아 르 프리데');
					ssrPool.push('가은');
					ssrPool.push('신지아');
					ssrPool.push('베로니카');
					ssrPool.push('ATAC-130 건쉽');
					ssrPool.push('ATL-1 링컨');
					
					srPool.push('유진');
					srPool.push('제이크 워커');
					srPool.push('리브 앨런');
					srPool.push('프레데릭 유마');
					srPool.push('로이 버넷');
					srPool.push('김소빈');
					srPool.push('베네딕트 콘스탄틴');
					srPool.push('리우라 베아트릭스');
					srPool.push('에블린 켈러');
					srPool.push('가브리엘 준 더 비셔스브레이커');
					srPool.push('스카우트');
					srPool.push('관리국 총병');
					srPool.push('피스 키퍼');
					srPool.push('HM 다연장 로켓');
					srPool.push('리퍼');

					rPool.push('신비한 상연');
					nPool.push('신비한 힐데');
				}else if(changedType == 'rita-hire'){
					// 리타 아르세니코 픽업
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-term").text("");
					$(".hire-pickup-char").text("리타 아르세니코");
					$(".goods-type").text("쿼츠");
					
					// 천장 표시
					$(".ceiling").show();
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 39;
					nPercent = 42.5;
					
					ssrPool.push('마리아 안토노프');
					ssrPool.push('이수연');
					ssrPool.push('옌 싱 란체스터');
					ssrPool.push('에델 마이트너');
					ssrPool.push('서윤');
					ssrPool.push('나유빈');
					ssrPool.push('터미네이터');
					ssrPool.push('스트롱홀드');
					ssrPool.push('이프리트');
					
					srPool.push('신비한 금태');
					rPool.push('신비한 상연');
					nPool.push('신비한 힐데');
				}
*/