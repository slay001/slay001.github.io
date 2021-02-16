	$(function(){
			// 소모 재화, 뽑은 레어도
			var tuningCount = 0;
			var setCount = 0;
			var tuningBinary = 0;
			var setBinary = 0;
			var tuningCredit = 0;
			var setCredit = 0;
			
			// 옵션 풀
			var tuningPool = [];
			var setPool = [];
			
			// 튜닝 풀 초기화
			tuningPool.push('체력'); 
			tuningPool.push('공격력'); 
			tuningPool.push('방어력'); 
			tuningPool.push('치명'); 
			tuningPool.push('치명타 피해 저항'); 
			tuningPool.push('치명타 피해'); 
			tuningPool.push('스킬충전속도'); 
			tuningPool.push('상태이상 저항'); 
			tuningPool.push('vs공중 피해'); 
			tuningPool.push('vs공중 피해감소'); 
			tuningPool.push('vs스트라이커 피해'); 
			tuningPool.push('vs스트라이커 피해감소'); 
			tuningPool.push('vs디펜더 피해'); 
			tuningPool.push('vs디펜더 피해감소'); 
			tuningPool.push('vs레인저 피해'); 
			tuningPool.push('vs레인저 피해감소'); 
			tuningPool.push('vs스나이퍼 피해'); 
			tuningPool.push('vs스나이퍼 피해감소'); 
			
			// 세트 풀 초기화
			setPool.push('체력');
			setPool.push('공격');
			setPool.push('방어');
			setPool.push('치명');
			setPool.push('회피');
			setPool.push('명중');
			setPool.push('안티 스트라이커');
			setPool.push('안티 디펜더');
			setPool.push('안티 레인저');
			setPool.push('안티 스나이퍼');
			setPool.push('안티 서포터');
			setPool.push('안티 타워');
			setPool.push('안티 시즈');
			setPool.push('치명타 피해');
			setPool.push('스킬충전속도');
			setPool.push('공격속도');
			
			console.log("1");
			// 장비 타입 변경
			$("input[name='equip-type-radio']").change(function(){
				var changedId = $('input[name="equip-type-radio"]:checked').attr('id');
				var nowTier = $('input[name="tier-type-radio"]:checked').attr('id');
				
				gachaReset();
				
				if(changedId == 'equip-wep'){
					// 무기
					
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree1.png'/>");
					
					if(nowTier == "tier-5"){
						$(".equip-table tr:nth-child(2) td").text("대적자의 핸즈 T5");
						$(".equip-table tr:nth-child(3) td").text("공격력 +110");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해 5.0%");
					}else{
						$(".equip-table tr:nth-child(2) td").text("메이즈 핸즈 T6");
						$(".equip-table tr:nth-child(3) td").text("공격력 +129");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해 13.0%");
					}
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
					
				}else if(changedId == 'equip-def'){
					// 방어구
					
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree2.png'/>");
					
					if(nowTier == "tier-5"){
						$(".equip-table tr:nth-child(2) td").text("대적자의 케이스 T5");
						$(".equip-table tr:nth-child(3) td").text("체력 +924");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해감소 8.0%");
					}else{
						$(".equip-table tr:nth-child(2) td").text("메이즈 케이스 T6");
						$(".equip-table tr:nth-child(3) td").text("체력 +1078");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해감소 12.0%");
					}
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
					
				}else if(changedId == 'equip-sub1'){
					// 보조 장비1
					
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree3.png'/>");
					
					if(nowTier == "tier-5"){
						$(".equip-table tr:nth-child(2) td").text("대적자의 크라운 T5");
						$(".equip-table tr:nth-child(3) td").text("명중 +132");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해 7.0%");
					}else{
						$(".equip-table tr:nth-child(2) td").text("메이즈 크라운 T6");
						$(".equip-table tr:nth-child(3) td").text("명중 +149");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해 14.0%");
					}
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
					
				}else{
					// 보조 장비2
					
					$(".equip-table tr:nth-child(1) td").empty().append("<img src='./img/icon/ree4.png'/>");
					
					if(nowTier == "tier-5"){
						$(".equip-table tr:nth-child(2) td").text("대적자의 무브먼트 T5");
						$(".equip-table tr:nth-child(3) td").text("회피 +132");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해 7.0%");
					}else{
						$(".equip-table tr:nth-child(2) td").text("메이즈 크라운 T6");
						$(".equip-table tr:nth-child(3) td").text("명중 +149");
						$(".equip-table tr:nth-child(4) td").text("vs지상 피해 14.0%");
					}
					$(".equip-table tr:nth-child(6) td").text(setPool[Math.floor(Math.random()*setPool.length)]);
				}
			})
			
			// 티어 변경
			$("input[name='tier-type-radio']").change(function(){
				
				gachaReset();
				
				$("input[name='equip-type-radio']").change();
				
				// 설명문구 변경
				var nowTier = $('input[name="tier-type-radio"]:checked').attr('id');
				
				if(nowTier == "tier-5"){
					$(".change-description-p").text("※1회 소비량 : 옵변 튜바 13 크레딧 63,000 / 셋변 셋바 8 크레딧 216,000");
				}else{
					$(".change-description-p").text("※1회 소비량 : 옵변 튜바 15 크레딧 73,500 / 셋변 셋바 10 크레딧 270,000");
				}
			})
			
			// navbar active설정
			$(".navbar-nav li:nth-child(6) a").addClass("active");
			
			// 가장 첫 채용을 기본선택
			$(".equip-type input:nth-child(1)").click();
			
			// 옵션2 변경
			$(".change-option2").click(function(){
				var nowTier = $('input[name="tier-type-radio"]:checked').attr('id');
				
				if(nowTier == "tier-5"){
					tuningCredit += 63000;
					tuningBinary += 13;
				}else{
					tuningCredit += 73500;
					tuningBinary += 15;
				}
				
				tuningCount++;
				
				tuning();
				
				updateUseGoods();
			})
			
			// 세트 변경
			$(".change-set").click(function(){
				var nowTier = $('input[name="tier-type-radio"]:checked').attr('id');
				
				if(nowTier == "tier-5"){
					setCredit += 216000;
					setBinary += 8;
				}else{
					setCredit += 270000;
					setBinary += 10;
				}
				
				setCount++;
				
				var afterSet = "";
				var newSet = "";
				
				do{
					afterSet = $(".equip-after tr:nth-child(6) td").text();
					newSet = setPool[Math.floor(Math.random()*setPool.length)];
				}while(afterSet == newSet)
				
				$(".equip-before tr:nth-child(6) td").text(afterSet);
				$(".equip-after tr:nth-child(6) td").text(newSet);
				
				updateUseGoods();
			})
			
			// 초기화
			$(".change-reset").click(function(){
				if(confirm("소모 재화를 초기화 하시겠습니까?")){
					gachaReset();
				}
			})
			
			// 변경 정보 초기화
			function gachaReset(){
				setBinary = 0;
				tuningBinary = 0;
				setCount = 0;
				tuningCount = 0;
				setCredit = 0;
				tuningCredit = 0;
				
				updateUseGoods();
			}
			
			// 옵션2 1회 변경
			function tuning(){
				var changedId = $('input[name="equip-type-radio"]:checked').attr('id');
				var nowTier = $('input[name="tier-type-radio"]:checked').attr('id');
				
				// 변경 옵션 설정 후 최저, 최고 퍼센트 설정
				var tuningOption = tuningPool[Math.floor(Math.random()*tuningPool.length)];
				var isFloat = true;
				var minRange = 0;
				var maxRange = 0;
				var result = 0;
				
				if(tuningOption == "체력"){
					isFloat = false;
					if(nowTier == "tier-5"){
						minRange = 75;
						maxRange = 300;
					}else{
						minRange = 88;
						maxRange = 350;
					}
				}else if(tuningOption == "공격력"){
					isFloat = false;
					if(nowTier == "tier-5"){
						minRange = 18;
						maxRange = 36;
					}else{
						minRange = 21;
						maxRange = 42;
					}
				}else if(tuningOption == "방어력" || tuningOption == "치명"){
					isFloat = false;
					if(nowTier == "tier-5"){
						minRange = 33;
						maxRange = 65;
					}else{
						minRange = 37;
						maxRange = 73;
					}
				}else if(tuningOption == "치명타 피해 저항"){
					if(nowTier == "tier-5"){
						minRange = 15.0;
						maxRange = 30.0;
					}else{
						minRange = 17.5;
						maxRange = 35.0;
					}
				}else if(tuningOption == "치명타 피해"){
					if(nowTier == "tier-5"){
						minRange = 4.7;
						maxRange = 14.0;
					}else{
						minRange = 5;
						maxRange = 15;
					}
				}else if(tuningOption == "스킬충전속도"){
					if(nowTier == "tier-5"){
						minRange = 4.5;
						maxRange = 9.0;
					}else{
						minRange = 5;
						maxRange = 10;
					}
				}else if(tuningOption == "상태이상 저항"){
					minRange = 10.0;
					maxRange = 20.0;
				}else{
					if(nowTier == "tier-5"){
						minRange = 6.0;
						maxRange = 12.0;
					}else{
						minRange = 7.0;
						maxRange = 14.0;
					}
				}
				
				// 보조장비의 경우 현재 최저 최고 퍼센트에서 10%+소수점 올림을 더한 수치
				if(changedId == 'equip-sub1' || changedId == 'equip-sub2'){
					if(isFloat){
						minRange = parseFloat((minRange*1.1).toFixed(1));
						maxRange = parseFloat((maxRange*1.1).toFixed(1));
					}else{
						minRange = Math.round(minRange*1.1);
						maxRange = Math.round(maxRange*1.1);
					}
				}
				
				// 옵션 퍼센트 연산
				if(isFloat){
					result = (Math.random()*(maxRange-minRange)+minRange).toFixed(1) + "%";
				}else{
					result = "+" + Math.floor(Math.random()*(maxRange-minRange)+minRange);
				}
				
				var afterTuning = $(".equip-after tr:nth-child(5) td").text();
				var newTuning = tuningOption + " " + result;
				
				$(".equip-before tr:nth-child(5) td").text(afterTuning);
				$(".equip-after tr:nth-child(5) td").text(newTuning);
			}

			// 사용 재화 업데이트
			function updateUseGoods(){
				$(".tuning-count").text(numberWithComma(tuningCount));
				$(".tuning-binary-count").text(numberWithComma(tuningBinary));
				$(".set-count").text(numberWithComma(setCount));
				$(".set-binary-count").text(numberWithComma(setBinary));
				$(".set-credit").text(numberWithComma(setCredit));
				$(".tuning-credit").text(numberWithComma(tuningCredit));
			}
			
			// 콤마찍기 함수
			function numberWithComma(i){
				return i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
		})