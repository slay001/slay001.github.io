	$(function(){
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
				var changedId = $('input[name="hire-type-radio"]:checked').attr('id');
				
				charPoolReset();
				gachaReset();
				$("#red-fish-check").prop("checked", false);
				
				$("#hidden-hire-group").css('background-color','white').css('color','#0d6efd');
				
				if(changedId == 'hidden-hire'){
					// 기밀 채용
					$(".hire-percent").text("SSR 3.5% SR 15% R 81.5% N 0%");
					$(".hire-term").text("");
					$(".goods-type").text("기채권");
					
					// 천장 표기
					$(".ceiling").show();
					
					$("#hidden-hire-group").css('background-color','#0d6efd').css('color','white');
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 81.5;
					nPercent = 0;
					
					ssrPool.push('루미');
					ssrPool.push('이수연');
					ssrPool.push('에스테로사 드 슈발리에');
					ssrPool.push('나나하라 치후유');
					ssrPool.push('주시영');
					ssrPool.push('옌 싱 란체스터');
					ssrPool.push('알렉스');
					ssrPool.push('샤오린');
					ssrPool.push('하야미 사나에');
					ssrPool.push('카린 웡');
					ssrPool.push('에델 마이트너');
					ssrPool.push('류드밀라');
					ssrPool.push('마리아 안토노프');
					ssrPool.push('이디스 트윈즈');
					ssrPool.push('나나하라 치나츠');
					ssrPool.push('양하림');
					ssrPool.push('레지나 맥크레디');
					ssrPool.push('릴리');
					ssrPool.push('서윤');
					ssrPool.push('가은');
					ssrPool.push('카일 웡');
					ssrPool.push('나유빈');
					ssrPool.push('로자리아 르 프리데');
					ssrPool.push('프레데릭 도마');
					ssrPool.push('엘리자베스 펜드래건');
					ssrPool.push('신지아');
					ssrPool.push('이유미');
					ssrPool.push('도미닉 킹 레지날드');
					ssrPool.push('터미네이터');
					ssrPool.push('관리국 검사');
					ssrPool.push('베로니카');
					ssrPool.push('강소영');
					ssrPool.push('스트롱홀드');
					ssrPool.push('ATAC-130 건쉽');
					ssrPool.push('타이탄');
					ssrPool.push('이프리트');
					ssrPool.push('ATL-1 링컨');
					ssrPool.push('에스타크');
					ssrPool.push('간나쓰선');
					ssrPool.push('야누스');
					ssrPool.push('시그마');
					
					srPool.push('신비한 금태');
					
					rPool.push('신비한 상연');
					
				}else if(changedId == '1staniv-hire'){
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
					
				}else if(changedId == 'harap-hire'){
					// 하랍 픽업 (임시)
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-term").text("2/16(화) ~ 3/2(화)");
					$(".hire-pickup-char").text("하랍");
					$(".goods-type").text("쿼츠");
					
					// 천장 표기
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
				}else if(changedId == 'operator-hire'){
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
					
					ssrPool.push('이수연');
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
				}else{
					// 수시채용
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-term").text("");
					$(".hire-pickup-char").text("없음");
					$(".goods-type").text("쿼츠");
					
					// 천장 숨김
					$(".ceiling").hide();
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 39;
					nPercent = 42.5;

					ssrPool.push('루미');
					ssrPool.push('이수연');
					ssrPool.push('에스테로사 드 슈발리에');
					ssrPool.push('나나하라 치후유');
					ssrPool.push('주시영');
					ssrPool.push('옌 싱 란체스터');
					ssrPool.push('알렉스');
					ssrPool.push('샤오린');
					ssrPool.push('하야미 사나에');
					ssrPool.push('카린 웡');
					ssrPool.push('에델 마이트너');
					ssrPool.push('류드밀라');
					ssrPool.push('마리아 안토노프');
					ssrPool.push('이디스 트윈즈');
					ssrPool.push('나나하라 치나츠');
					ssrPool.push('양하림');
					ssrPool.push('레지나 맥크레디');
					ssrPool.push('릴리');
					ssrPool.push('서윤');
					ssrPool.push('가은');
					ssrPool.push('카일 웡');
					ssrPool.push('나유빈');
					ssrPool.push('로자리아 르 프리데');
					ssrPool.push('프레데릭 도마');
					ssrPool.push('엘리자베스 펜드래건');
					ssrPool.push('신지아');
					ssrPool.push('이유리');
					ssrPool.push('이유미');
					ssrPool.push('도미닉 킹 레지날드');
					ssrPool.push('터미네이터');
					ssrPool.push('관리국 검사');
					ssrPool.push('베로니카');
					ssrPool.push('강소영');
					ssrPool.push('스트롱홀드');
					ssrPool.push('최지훈');
					ssrPool.push('ATAC-130 건쉽');
					ssrPool.push('타이탄');
					ssrPool.push('이프리트');
					ssrPool.push('ATL-1 링컨');
					ssrPool.push('에스타크');
					ssrPool.push('간나쓰선');
					ssrPool.push('야누스');
					ssrPool.push('시그마');

					srPool.push('신비한 금태');
					rPool.push('신비한 상연');
					nPool.push('신비한 힐데');
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
				
				var changedId = $('input[name="hire-type-radio"]:checked').attr('id');
				
				if(changedId == 'hidden-hire'){
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
				
				var changedId = $('input[name="hire-type-radio"]:checked').attr('id');
				
				if(changedId == 'hidden-hire'){
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
				if(hasPickup) calcedSSRPercent = ((ssrPercent-1) / ssrPool.length).toFixed(2);
				else calcedSSRPercent = ((ssrPercent) / ssrPool.length).toFixed(2);
				
				var infoHTML = "";
				infoHTML += "<h5>[SSR "+ssrPercent+"%]</h5>";
				infoHTML += "<ul>";
				if(hasPickup){
				infoHTML += 	"<li>" + $(".hire-pickup-char").text() + " (1%)</li>";
				}
				for(var i=0; i<ssrPool.length;i++){
				infoHTML += 	"<li>" + ssrPool[i] + " (" + calcedSSRPercent + "%)</li>";
				}
				infoHTML += "</ul>";
				
				infoHTML += "<h5>[SR "+srPercent+"%]</h5>";
				infoHTML += "<ul>";
				for(var i=0; i<srPool.length;i++){
				infoHTML += 	"<li>" + srPool[i] + " (" + srPercent/srPool.length + "%)</li>";
				}
				infoHTML += "</ul>";
				
				infoHTML += "<h5>[R "+rPercent+"%]</h5>";
				infoHTML += "<ul>";
				for(var i=0; i<rPool.length;i++){
				infoHTML += 	"<li>" + rPool[i] + " (" + rPercent/rPool.length + "%)</li>";
				}
				infoHTML += "</ul>";
				
				infoHTML += "<h5>[N "+nPercent+"%]</h5>";
				infoHTML += "<ul>";
				for(var i=0; i<nPool.length;i++){
				infoHTML += 	"<li>" + nPool[i] + " (" + nPercent/nPool.length + "%)</li>";
				}
				infoHTML += "</ul>";
				
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
				var nowHireTypeId = $('input[name="hire-type-radio"]:checked').attr('id');
				
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
					if(nowHireTypeId == 'hidden-hire' || nowHireTypeId == 'harap-hire'){
						var pickupPercent = parseFloat((Math.random()*ssrPercent).toFixed(1));
						
						if(pickupPercent <= 1 || ceilingCount <= 1){
							isPickup = true;
							pickupChar = $(".hire-pickup-char").text();
							
							if(ceilingCount <= 1){
								isCeiling = true;
							}
						}
					}
					
					selectedPool = ssrPool;
					getRarity = "ssr";
					ssrCount++;
				}else if(randPercent <= ssrPercent+srPercent){
					selectedPool = srPool;
					getRarity = "sr";
					srCount++;
				}else if(randPercent <= ssrPercent+srPercent+rPercent){
					selectedPool = rPool;
					getRarity = "r";
					rCount++;
				}else{
					selectedPool = nPool;
					getRarity = "n";
					nCount++;
				}
				
				var getChar = "";
				
				if(isPickup){
					getRarity = "pickup";
					getChar = pickupChar;
					
					// 천장 횟수 초기화
					ceilingCount = 150;
				}else{
					var pick = Math.floor(Math.random()*selectedPool.length);
					getChar = selectedPool[pick];
					
					// 천장 횟수 갱신
					if(nowHireTypeId == 'hidden-hire' || nowHireTypeId == 'harap-hire'){
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
				}else if(getRarity == "ssr" && nowHireTypeId == "operator-hire"){
					iconImg = "./img/unit_icon/unit_ssr.jpg";
				}else if(getRarity == "ssr" || getRarity == "pickup"){
					if(getChar == "하랍") iconImg = "./img/unit_icon/unit_144.jpg";
					else if(getChar == "얼터그레시브 서윤") iconImg = "./img/unit_icon/unit_142.jpg";
					else if(getChar == "최지훈") iconImg = "./img/unit_icon/unit_141.jpg";
					else if(getChar == "이유리") iconImg = "./img/unit_icon/unit_140.jpg";
					else if(getChar == "릴리") iconImg = "./img/unit_icon/unit_138.jpg";
					else if(getChar == "베로니카") iconImg = "./img/unit_icon/unit_135.jpg";
					else if(getChar == "육익 나유빈") iconImg = "./img/unit_icon/unit_134.jpg";
					else if(getChar == "솔라 코덱스 유나 스프링필드") iconImg = "./img/unit_icon/unit_133.jpg";
					else if(getChar == "시그마") iconImg = "./img/unit_icon/unit_132.jpg";
					else if(getChar == "에이스 오브 윙즈 이수연") iconImg = "./img/unit_icon/unit_131.jpg";
					else if(getChar == "류드밀라") iconImg = "./img/unit_icon/unit_130.jpg";
					else if(getChar == "알렉스") iconImg = "./img/unit_icon/unit_129.jpg";
					else if(getChar == "야누스") iconImg = "./img/unit_icon/unit_128.jpg";
					else if(getChar == "타입 : 펜릴 유미나") iconImg = "./img/unit_icon/unit_127.jpg";
					else if(getChar == "이디스 트윈즈") iconImg = "./img/unit_icon/unit_126.jpg";
					else if(getChar == "옌 싱 란체스터") iconImg = "./img/unit_icon/unit_125.jpg";
					else if(getChar == "타입 : 지크프리트 힐데") iconImg = "./img/unit_icon/unit_123.jpg";
					else if(getChar == "레지나 맥크레디") iconImg = "./img/unit_icon/unit_122.jpg";
					else if(getChar == "에델 마이트너") iconImg = "./img/unit_icon/unit_120.jpg";
					else if(getChar == "도미닉 킹 레지날드") iconImg = "./img/unit_icon/unit_118.jpg";
					else if(getChar == "프레데릭 도마") iconImg = "./img/unit_icon/unit_116.jpg";
					else if(getChar == "로자리아 르 프리데") iconImg = "./img/unit_icon/unit_115.jpg";
					else if(getChar == "하야미 사나에") iconImg = "./img/unit_icon/unit_114.jpg";
					else if(getChar == "나나하라 치나츠") iconImg = "./img/unit_icon/unit_112.jpg";
					else if(getChar == "나나하라 치후유") iconImg = "./img/unit_icon/unit_110.jpg";
					else if(getChar == "카린 웡") iconImg = "./img/unit_icon/unit_109.jpg";
					else if(getChar == "주시영") iconImg = "./img/unit_icon/unit_108.jpg";
					else if(getChar == "이유미") iconImg = "./img/unit_icon/unit_107.jpg";
					else if(getChar == "강소영") iconImg = "./img/unit_icon/unit_106.jpg";
					else if(getChar == "양하림") iconImg = "./img/unit_icon/unit_103.jpg";
					else if(getChar == "루미") iconImg = "./img/unit_icon/unit_097.jpg";
					else if(getChar == "가은") iconImg = "./img/unit_icon/unit_096.jpg";
					else if(getChar == "에스타크") iconImg = "./img/unit_icon/unit_094.jpg";
					else if(getChar == "이프리트") iconImg = "./img/unit_icon/unit_092.jpg";
					else if(getChar == "관리국 검사") iconImg = "./img/unit_icon/unit_089.jpg";
					else if(getChar == "나유빈") iconImg = "./img/unit_icon/unit_088.jpg";
					else if(getChar == "이수연") iconImg = "./img/unit_icon/unit_087.jpg";
					else if(getChar == "신지아") iconImg = "./img/unit_icon/unit_070.jpg";
					else if(getChar == "엘리자베스 펜드래건") iconImg = "./img/unit_icon/unit_067.jpg";
					else if(getChar == "에스테로사 드 슈발리에") iconImg = "./img/unit_icon/unit_057.jpg";
					else if(getChar == "ATAC-130 건쉽") iconImg = "./img/unit_icon/unit_056.jpg";
					else if(getChar == "간나쓰선") iconImg = "./img/unit_icon/unit_054.jpg";
					else if(getChar == "ATL-1 링컨") iconImg = "./img/unit_icon/unit_053.jpg";
					else if(getChar == "카일 웡") iconImg = "./img/unit_icon/unit_047.jpg";
					else if(getChar == "마리아 안토노프") iconImg = "./img/unit_icon/unit_045.jpg";
					else if(getChar == "타이탄") iconImg = "./img/unit_icon/unit_036.jpg";
					else if(getChar == "터미네이터") iconImg = "./img/unit_icon/unit_031.jpg";
					else if(getChar == "스트롱홀드") iconImg = "./img/unit_icon/unit_029.jpg";
					else if(getChar == "샤오린") iconImg = "./img/unit_icon/unit_006.jpg";
					else if(getChar == "서윤") iconImg = "./img/unit_icon/unit_004.jpg";
				}
				
				var innerHTML = "";
				innerHTML += "<li class='rarity-"+getRarity+"'>";
				innerHTML += 	"<div style='border:1px solid black;'><img src='"+iconImg+"'></div>";
				innerHTML += 	"<div><span>["+getRarity.toUpperCase()+"]</span></div>";
				innerHTML += 	"<div><span>"+getChar+"</span></div>";
				if(isCeiling){
				innerHTML += 	"<div><span>(확정채용)</span></div>";
				}
				innerHTML += "</li>";
				
				$(".hire-result ul").append(innerHTML);
				
				if(getRarity == 'ssr' || getRarity == 'pickup'){
					updateHireResult(getChar);
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
		})