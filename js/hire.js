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
				
				if(changedId == 'hidden-hire'){
					// 기밀 채용
					$(".hire-percent").text("SSR 3.5% SR 15% R 81.5% N 0%");
					$(".hire-pickup-char").text("얼터그레시브 서윤");
					$(".goods-type").text("기채권");
					
					// 천장 표기
					$(".ceiling").show();
					
					ssrPercent = 3.5;
					srPercent = 15;
					rPercent = 81.5;
					
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
					
					for(var i=0; i<37; i++){
						srPool.push('대충 SR');
					}
					
					for(var i=0; i<30; i++){
						rPool.push('대충 R');
					}
					
				}else if(changedId == '1staniv-hire'){
					// 1주년 기념 채용
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
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
					ssrPool.push('에델');
					ssrPool.push('레지나');
					ssrPool.push('릴리');
					ssrPool.push('이디스');
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
					
					for(var i=0; i<22; i++){
						rPool.push('대충 R');
					}
					
					for(var i=0; i<13; i++){
						nPool.push('대충 N');
					}
				}else if(changedId == 'harap-hire'){
					// 하랍 픽업 (임시)
					$(".hire-percent").text("SSR 3.5% SR 15% R 39% N 42.5%");
					$(".hire-pickup-char").text("하랍");
					$(".goods-type").text("쿼츠");
					
					// 천장 표기
					$(".ceiling").show();
					
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
					
					for(var i=0; i<37; i++){
						srPool.push('대충 SR');
					}
					
					for(var i=0; i<30; i++){
						rPool.push('대충 R');
					}
					
					for(var i=0; i<13; i++){
						nPool.push('대충 N');
					}
				}else{
					// 오퍼레이터 수시채용
					$(".hire-percent").text("SSR 2% SR 8% R 35% N 55%");
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
				}
				
			})
			
			// navbar active설정
			$(".navbar-nav li:nth-child(5) a").addClass("active");
			
			// 가장 첫 채용을 기본선택
			$(".hire-type input:nth-child(1)").click();
			
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
				
				// 현재 채용 타입
				var nowHireTypeId = $('input[name="hire-type-radio"]:checked').attr('id');
				
				if(randPercent <= ssrPercent || ceilingCount <= 1){
					
					// 기밀/픽업채용일 경우 
					if(nowHireTypeId == 'hidden-hire' || nowHireTypeId == 'harap-hire'){
						var pickupPercent = parseFloat((Math.random()*3.5).toFixed(1));
						
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
				
				var innerHTML = "";
				innerHTML += "<li class='rarity-"+getRarity+"'>";
				innerHTML += 	"<div style='border:1px solid black;'>[대충 얼굴]</div>";
				innerHTML += 	"<div><span>"+getChar+"</span></div>";
				if(isCeiling){
				innerHTML += 	"<div><span>(천장)</span></div>";
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