let cusName
let caseNo
let mailType
let account_id
let txt_tier
let txt_closing = ""
let txt_ack = ""
let txt_name = ""
let txt_email = ""
let txt_prob = ""
let txt_status = ""
let txt_type = ""
let pol_aid
let pol_ads
let pol_link

const txt_helpctr = "Meta広告に関しまして詳しくは下記広告主様向けヘルプセンターをご参照くださいませ。\nhttps://www.facebook.com/business/help"
const txt_gsospt = "尚、お客様の広告アカウントは以下のサポートチャンネルもお問い合わせ可能でございますので、どうぞご利用くださいませ。\nfacebook.com/business/help"
const txt_svy = `※※サポートスタッフの対応について※※` +
		`\nこの後サポートスタッフの対応につきまして短いアンケートをメールにてご送付させて頂きますので、今回のサポートのご意見・ご感想をお聞かせ下さいませ。` +
		`\nお客様からのフィードバックは、今後のサービス向上・改善の為に活用させて頂きます。` +
		`\n\nMetaプロチームにお問い合わせ頂きありがとうございました。\n今後とも何卒宜しくお願い致します。`
const txt_spthour = `Facebook広告のオンラインサポート対応時間が変更となり、現在は月～土（8:15～19:30）でご対応をしております。` +
		`\n\n今後とも、何卒よろしくお願い申し上げます。`

const txt_tq3 = "以上、お役に立ちましたら幸いでございます。"
const txt_apl6 = "この度はご迷惑をお掛けして申し訳ございません。"

const txt_envideo = "本件につきましては、技術部門に調査を依頼させていただきたく存じます。" +
			"\nつきましては、広告作成開始からエラーが発生するまでの一連の作業について、スクリーンキャプチャ(動画）を英語にてご提供いただけますと幸いです。"
const txt_changelng = "【言語の変更方法】\n" +
		"1. https://www.facebook.com/help/ こちらのURLをクリック\n" +
		"2.ページ最下部の鉛筆マークの言語設定変更の部分を英語に変更\n" +
		"3.広告マネージャーのページを更新\n" +
		"4.英語に変換されたものを動画でキャプチャ"

const txm_chatend = "先ほどはお忙しいようでしたので、一旦チャットを終了させて頂きましたがその他にご質問がございましたらお気軽にお問い合わせください。"
const txm_anyissue = "本件につきまして、何かございましたらお気兼ねなくご連絡くださいませ。"
const txm_anyissue2 = "つきましてはご確認いただけますと幸いです。もしも不具合などがございましたら、引き続きご対応をさせて頂きますので、お気兼ねなくお申し付けくださいませ。"

const txm_tqe = "この度はお問い合わせいただきありがとうございました。"
const txm_tqfu = "今後ともよろしくお願いいたします。"
const txm_senderj = "西岡\n"
const txm_concierge = "Meta Pro Team | To learn more about supporting your business with Meta visit: https://www.facebook.com/business/help and https://www.facebook.com/business/learn"

const txm_invs = "現在、担当部署に調査を依頼しておりますので回答があり次第追ってご連絡させていただきますね。"
const txm_wait2 = "お急ぎの所誠に恐縮ではございますが、今しばらくお待ちいただけますと幸いでございます。"
const txm_review = "お忙しいところ恐れ入りますが上記ご確認いただきますようお願い申し上げます。"
const txm_answer = "担当部門より下記の通り回答がございましたので、ご報告申し上げます。\n" +
					"***********************************************************************\n\n\n" +
					"***********************************************************************\n"

const txm_other1 = "その他にご不明点がございましたら広告IDとスクリーンキャプチャを添えてお気軽にご連絡くださいませ。"
const txm_other2 = "また本件について、その他にもご不明な点やご質問等ございましたら、そちらについても喜んでサポートさせていただきますので、その際はどうぞお気兼ね無くお申し付けくださいませ。"
const txm_other3 = "また新たにご質問がございましたら新規でお問い合わせ頂ければ幸いです。"
const txm_other4 = "また、新しいご質問がございましたら、広告サポートより改めてご対応させていただきます。"
const txm_other5 = "その他にもお手伝いできることがございましたら下記リンクよりお気軽にご連絡ください。\nhttp://www.facebook.com/business/resources"

const txm_ack = "ご添付いただいた画像のエラー内容を拝見し、詳細について内部で確認をいたしました。"
const txm_found = "下記情報を確認いたしましたのでご共有させていただきます。"

const txm_tqcon = "それでは引き続きよろしくお願いいたします。"
const txm_tqcon2 = "引き続き対応させていただきます。"
const txm_close1 = "それでは本件はこちらでクローズとさせて頂きますが、その他にご不明点がございましたらいつでも広告サポートへお問い合わせくださいませ。"
const txm_close2 = "上記回答がお役に立ちますと幸いでございますが、もしもまだご不明な点等ございましたら引き続き喜んでサポートさせて頂きますので、その際はどうぞお気兼ねなくお申し付け頂けますと幸いでございます。"

const txm_selfhelp = "ご参考までに、下記リンクよりご自身で申請をして頂くとより早く問題を解決する事が可能ですのでご活用下さい。\n" +
			"頂いた申請に関しまして、広告ポリシーの専門チームが直接対応させて頂いております。\n\n" +
			"- 広告の未承認。\nhttps://www.facebook.com/accountquality\n\n" +
			"- 利用規約を守っていたにも関わらず、ご利用が停止された広告アカウント。\nhttps://www.facebook.com/help/contact/531795380173090\n\n" +
			"- 広告ポリシーに抵触した為、ご利用が停止された広告アカウント。\nhttps://www.facebook.com/help/contact/2026068680760273"


const txm_acctreject = "広告アカウントの再開を担当部署へと依頼したものの、残念ながら広告アカウントの利用再開は不可との回答がございましたのでご報告申し上げます。\n" +
				"担当部署より、下記回答がございましたのでご確認くださいませ。\n" +
				"***********************************************************************\n" +
				"お客様の広告アカウントを再審査させていただきました。恐れ入りますが、アカウントを再度有効にすることはできません。\n\n" +
				"すべての広告アカウントは、ポリシーの遵守と広告コンテンツの品質について評価されます。広告ポリシーに従っていない広告を掲載したアカウントは停止されます。\n\n" +
				"お客様にお取りいただける措置はありません。Facebookは、お客様のビジネスモデルに対応しておりません。\n" +
				"これは最終決定です。\n\n" +
				"異議申し立ての利用に関して、ご意見・ご感想をお聞かせください。\nhttps://www.facebook.com/survey?oid=725362727627947\n\n" +
				"どうぞよろしくお願いいたします。\n\n" +
				"Facebookをご利用いただきありがとうございます。\n\nFacebook Ads Team\n" +
				"***********************************************************************\n\n" +
				"私の方でも複数回、アカウント再開の申請をいたしましたが、ポリシーチームの最終決定と判断され、\n" +
				"これ以上のお問い合わせは受けられないとのことでしたので、何卒ご理解いただけますと幸いでございます。"

const txm_addisap = "広告の再審査を担当部門に依頼いたしましたが、残念ながら再度未承認との結果が参りましたのでご報告申し上げます。\n" +
				"下記が、担当部署からの回答でございます。\n" +
				"***********************************************************************\n" +
				"***********************************************************************\n\n" +
				"私の方でも複数回申請をいたしましたが、残念ながら却下となってしまいました。何卒ご理解いただけますと幸いでございます。"
const txm_reply1 = "この度はご丁寧にご返信いただき、ありがとうございました。"
const txm_reply3 = "ご確認いただき、ありがとうございました。"
const txm_reply2 = "さっそくご返信ありがとうございました。"
const txm_noupdate = "本件について、まだ担当部門からは回答が来ていない状況でございます。"
const txm_under = "本件につきましては、現在も担当部門にて引き続き調査中となっております。"

const txm_busyemail = "現在お問い合わせが大変混雑しておりまして、順次返答させていただいておりますが、大変ご迷惑をおかけしてしまい、申し訳ございません。"
const txm_forwardinfo = "早速、ご教示頂いた情報を元に担当部署へ申請をさせて頂きましたので、回答がありますまで今しばらくお待ち頂けますと幸いでございます。"
const txm_closenow = "本件はこれにてクローズとなりますので、ご不明点がございました際には下記のリンクより改めてお問い合わせ頂けますと幸いでございます。\n" +
					"https://www.facebook.com/business/resources"
txm_force_close = "以前、お問い合わせいただきました件につきまして、ご連絡をさせて頂いております。\n\n" +
			"本件につきまして、長い間お待たせしておりましたことを心よりお詫び申し上げます。\n" +
			"担当部署より長期にわたりご対応をさせて頂いておりましたが、内部より本件につきましては詳細の確認が取れず調査続行が不可とされました。\n" +
			"本件の回答までご提示させて頂くに至らず、ご不便をおかけして誠に申し訳ございません。\n\n" +
			"上記のため、一時本件はクローズとさせて頂きますが、また、もしも現在不具合やお困りのことがございましたら、引き続きご対応をさせて頂きますので、下記広告サポートよりお申し付け頂けますと幸いでございます。"
txm_force_close2 = "残念ながら、本件は現在も担当部署にて引き続き調査中との事で現時点では回答提示目安は開示されていないものの、引き続き調査をご希望の場合はお気軽にご連絡下さいませ。\n\n" +
			"この度はご迷惑をお掛けしております事心よりお詫び申し上げるのと共に、上記ご了承頂けると幸いでございます。"
txm_force_survey = "恐れ入りますが、一旦本件はクローズとさせて頂きますね。その際アンケートが送付されるかと存じますが、こちらのEメールへ直接ご返信いただけますと引き続きご対応をさせて頂きますので、お申し付け頂けますと幸いでございます。"
const txm_wait3 = "本件お時間頂き誠にありがとうございます。"
const txm_wait4 = "つきましてはお急ぎの所誠に恐縮ではございますが、今しばらくお待ちいただけますと幸いでございます。"
const txm_awaitreply = "お預りしております掲題の件についてでございますが、大変恐れ入りますが現在も担当部署からの回答待ちとなっております。\n" +
									"お待たせをしてご不便をおかけいたしますが、お急ぎの旨はお伝えさせて頂いておりますので、ご理解頂けますと幸いでございます。\n" +
									"引き続き、部署より回答があり次第、追ってご連絡をさせて頂きます。"
const txm_newinq = "また新しいご質問に関しましては、改めてご対応をさせて頂きますので、広告サポートよりお気兼ねなくお申し付けくださいませ。\nお世話になりますが、何卒よろしくお願い申し上げます。"
const txm_billingcountry = "スクリーンショットをお送りすることができませんが、\n" +
														"一度広告アカウントにて「設定」よりお進みいただき、「国」が設定されているかご確認いただき、\nまだ設定がされていない場合には、ご設定をいただきますようお願い申し上げます。\n\n" +
														"お手数をおかけして大変恐縮ではございますが、上記ご設定頂きました後に広告アカウントの設定画面のスクリーンショットとともにご一報いただきますようお願い申し上げます。"
const txm_additional = "つきましては、お手数をおかけしますが下記のような追加資料をご提出いただきますようお願い申し上げます。"
const txm_withscreenshot = "お忙しいところ恐れ入りますが、上記につきご返信頂きますようお願い申し上げます。\nご不明な点等ございましたら、関連のスクリーンショットと共にお気軽にご連絡ください。\n\n"
const txm_nocurrency = "尚、「通貨」欄のご記入がなかったため、JPYにて設定させていただいております。\nもしも異なる場合は、このメールにご返信いただけますと幸いです。"
const txm_wrongly_sent = "大変ご迷惑をおかけし、申し訳ございません。\n" +
												"送信日時：\n差出人：\n件名：\n\n" +
												"恐れ入りますが、件のメールは削除していただきたくお願い申し上げます。\n" +
												"今後はこのようなことがないよう、十分注意いたします。心よりお詫び申し上げます。\n"


function _load(){
  document.getElementById("tday").value = sessionStorage.getItem("caseDate")
	cusName = sessionStorage.getItem("cusName")
	document.getElementById("cus-name").value = cusName
	caseNo = sessionStorage.getItem("caseNo")
	document.getElementById("case-no").value = caseNo
  txt_prob = sessionStorage.getItem("summary")
	document.getElementById("mail-prob").value = txt_prob
	pol_aid = sessionStorage.getItem("pol_aid")
	pol_link = sessionStorage.getItem("pol_link")
	pol_ads = sessionStorage.getItem("pol_ads")

  //受け取ったら消す
  sessionStorage.clear()
}

function setOpening() {
	setCusName()
	caseNo = document.getElementById("case-no").value
}

function setCusName(){
	if(document.getElementById("cus-name").value.length > 0){
		txt_name = document.getElementById("cus-name").value
	}
}

function setTier(obj) {
	txt_tier = obj.value
}

function setStatus(obj){
	txt_status = obj.value
}

function setType(obj){
	txt_type = obj.value
}

function setClosing(){
	if(txt_status == "donec"){
		txt_closing = ""
		if(mailType == "inv-complete"){
		}else{
			txt_closing += txm_close2 + "\n\n"
		}

		txt_closing += txt_svy
	}
}

function setAdAccountID(){
	account_id = document.getElementById("adaccount-id").value
}

function setDupCase() {
	caseNo = document.getElementById("case-no").value
}

function getHeder(){
	const todate = document.getElementById("tday").value
	const headstr = document.getElementById("mail-header").value
	let txt_mail = ""
	if(todate.length == 0){
		getDate()
		todate = document.getElementById("tday").value
	}
	if(headstr.length > 0){
		txt_mail = headstr + "\n\n"
	}else{
		let txt_date = ""
		if(todate.length > 0){
			const strMon = parseInt(todate.substring(5,7))
			const strDate = parseInt(todate.substring(8,10))
			txt_date = `${strMon}月${strDate}日`
		}
		txt_mail += `【お問い合わせ番号: ${caseNo}】\n`
		txt_mail += `【お問い合わせ日: ${txt_date}】\n\n`
		txt_mail += `${txt_name} 様\n\n`
	}
	return txt_mail
}
function writeEmail(){
	setOpening()
	let txt_mail = getHeder()

	txt_mail += `いつもお世話になっております。Metaプロチームの西岡と申します。\n\n`

	setMailProb()
	setAdAccountID()

	if(txt_type == "afterchat"){
		txt_mail += `本日は${txt_prob}に関してチャットにお越しいただきありがとうございます。\n\n`
	}else if(txt_type == "emailq"){
		txt_mail += `お問い合わせ頂いた「${txt_prob}」の件でご連絡を差し上げております。\n\n`
	}else if(txt_type == "followup"){
		txt_mail += `この度は、${txt_prob}の件でご不便をおかけし申し訳ございません。\n\n`
	}else if(txt_type == "behalf"){
		const agent = document.getElementById("agent-name").value
		txt_mail += `${agent}の代理で`
		txt_mail += txt_prob.length>0? `「${txt_prob}」の件で`:''
		txt_mail += "ご連絡差し上げました。\n\n"
	}
	switch (mailType) {
		case "chatend":
			txt_mail += txm_chatend + "\n\n"
			txt_mail += txm_anyissue + "\n\n"
			break
		case "errreply":
			txt_mail += txt_apl6 + "\n\n"
			txt_mail += txm_invs + "\n\n"
			txt_mail += txm_wait2 + "\n\n"
			break
		case "videoen":
			txt_mail += txt_apl6 + "\n\n"
			txt_mail += `誠にお手数ではございますが、広告作成開始からエラー（${txt_prob}）が発生するまでの一連の作業について、スクリーンキャプチャ（動画）を英語にていただけますと幸いです。\n\n`
			txt_mail += txt_changelng + "\n\n"
			txt_mail += txm_review + "\n\n"
			txt_mail += `担当部門より回答があり次第、${txt_name}様へご連絡させていただきます。\n\n`
			break
		case "additional":
			txt_mail += "先ほどのチャットでお伝えした内容が不十分でしたので改めてご連絡差し上げました。\n\n\nこの度は混乱を招き誠に申し訳ございませんでした。\n\n"
			txt_mail += txm_anyissue + "\n\n"
			break
		case "disabledaccnt":
			txt_mail += "お問い合わせいただきました「広告アカウントが停止」の件についてご連絡させていただいております。\n\n"
			txt_mail += `この度、突然広告アカウント（ID:${account_id}）が停止されてしまったとの事、大変ご迷惑をおかけしております。\n\n`
			txt_mail += txm_invs + "\n\n"
			txt_mail += txm_wait2 + "\n\n"
			break
		case "acctback":
			txt_mail += `お問い合わせいただきました「広告アカウント（ID:${account_id}）停止」の件についてご連絡させていただいております。\n`
			txt_mail += `この度は大変ご迷惑をおかけいたしました。\n\n`
			txt_mail += `担当部署より回答があり、広告アカウント（ID:${account_id}）は現在承認済みとなっておりますのでご報告いたします。\n\n`
			txt_mail += txm_anyissue2 + "\n\n"
			txt_mail += txm_selfhelp + "\n\n"
			break
		case "acctdenied":
			txt_mail += `お問い合わせいただきました「広告アカウント（ID:${account_id}）停止」の件についてご連絡させていただいております。\n`
			txt_mail += txt_apl6+ "\n\n"
			txt_mail += txm_acctreject+ "\n\n"
			break
		case "disapproved":
		case "pendingreview":
				const ad_status = mailType === "disapproved"?"非承認":"審査中"
				txt_mail += `本日は${ad_status}広告に関してチャットにお越し頂きありがとうございます。\n`
				txt_mail += "この度は、広告の審査についてご不便をおかけして申し訳ございません。\n\n"
				txt_mail += `広告アカウントID:${pol_aid}\n`
				txt_mail += `広告ID:\n${pol_ads}\n`
				txt_mail += `上記${ad_status}広告につきまして、審査担当部署に審査を依頼しております。\n`
				txt_mail += `担当部門より回答があり次第、`
				txt_mail += (txt_name.length > 0 ? `${txt_name}` : "お客")
				txt_mail += `様にEメールにてご連絡さしあげます。\n\n`
				txt_mail += txm_wait2 + "\n\n"
				txt_mail += txm_anyissue + "\n\n"
				break
		case "approved":
			txt_mail += "この度は、広告の審査についてお問い合わせいただきありがとうございました。\n\n"
			txt_mail += `広告アカウントID:${account_id}\n`
			txt_mail += "広告ID:\n\n"
			txt_mail += `上記非承認広告につきまして、担当部署より回答があり、現在承認済みとなっておりますのでご報告いたします。\n`
			// txt_mail += "こちらが広告マネージャーへのリンクとなります：\n\n"
			txt_mail += "つきましては広告をご確認頂き、もしも不具合などがございましたら、引き続きご対応をさせて頂きますので、お気兼ねなくお申し付けくださいませ。\n\n"
			txt_mail += txm_selfhelp + "\n\n"
			break
		case "rejected":
			txt_mail += "お問い合わせいただいておりました非承認広告の件でご連絡差し上げました。\n\n"
			txt_mail += `広告アカウントID:${account_id}\n`
			txt_mail += "広告ID:\n\n"
			txt_mail += txm_addisap+ "\n\n"
			break
		case "duplicate":
			dupNo = document.getElementById("dupcase-no").value
			txt_mail += `お問い合わせ内容を確認させていただきましたところ、本件はお問い合わせ番号：${dupNo}と同様のご質問かと存じます。\n`
			txt_mail += `つきましては、本件についてはお問い合わせ番号：${dupNo}にて引き続きご対応させていただきますね。\n`
			txt_mail += `お問い合わせ番号: ${caseNo}はこれにてクローズとさせていただきます。\n\n`
			break
		case "noupdate":
			txt_mail += txm_noupdate + "\n"
			txt_mail += txm_wait2 + "\n\n"
			txt_status = "continue"
			break
		case "underprogress":
			txt_mail += txt_apl6 + "\n"
			txt_mail += txm_reply2 + "\n\n"
			txt_mail += txm_under + "\n"
			txt_mail += txm_wait2 + "\n\n"
			txt_status = "continue"
			break
			case "underprogress2":
				txt_mail += txm_awaitreply + "\n\n"
				txt_status = "continue"
				break
		case "afterclose":
			txt_mail += txm_reply1 + "\n\n"
			txt_mail += txt_prob.length>0? `${txt_prob}とのこと、安心いたしました。`:""
			txt_mail += txm_reply3 + "\n\n"
			txt_status = "nosurvey"
			break
		case "forceclose":
			txt_mail += `以前、チャットにてお問い合わせいただきました「${txt_prob}」の件につきまして、ご連絡をさせて頂いております。` + "\n\n"
			txt_mail += "●お問合せ内容\n\n"
			txt_mail += "本件に関しては現在も担当部署にて引き続き調査中となりますが、事象の方は現在も継続しておりますでしょうか。\nご多用のところ恐縮ですがご確認いただけますと幸いです。\n\n"
			txt_mail += "現在不具合やお困りのことがございましたら、引き続きご対応をさせて頂きますので、下記広告サポートよりお申し付け頂けますと幸いでございます。 \n\n"
			txt_mail += "https：//www.facebook.com/business/help \n\n"
			txt_mail += "また今回頂きましたご意見、ご要望はお時間があるときで結構でございますので、もしよろしければ下記のリンクより直接Facebookへご意見を頂ければ幸いです。\n\n"
			txt_mail += "お客様にとってより良いサービスの提供のために今後のアップグレードに活かされていきます。\n\n"
			txt_mail += "【Facebookの機能に関するご意見・ご感想をお聞かせください】\nhttps://www.facebook.com/help/contact/268228883256323\n\n"
			txt_mail += "Facebookサポートコンシェルジュにお問い合わせいただきありがとうございました。今後ともお世話になりますが、何卒よろしくお願いいたします。\n\n"
			break
		case "interim":
			txt_mail += `お問い合わせ、誠にありがとうございます。 お問い合わせ番号: ${caseNo} にて承りました。\n`
			txt_mail += "現在お問い合わせが大変混雑しており順次返答させて頂いておりますので今しばらくお待ちいただく間に、Facebook広告管理者ヘルプセンターでFacebook広告についての詳細をご覧ください。https://www.facebook.com/business/help\n\n"
			txt_mail += "なるべく早くお返事させていただきます。\n\n"
			txt_mail += "どうぞよろしくお願いいたします。\n\n"
			break

		case "inv-complete":
			const advertiser = document.getElementById("advertiser-name").value
			txt_mail += txm_wait3 + "\n\n"
			txt_mail += `ご依頼いただきましたJP Invoicing Request Form (アカウント開設依頼）(Case ID: ${caseNo})の件、\n`
			txt_mail += "担当部署での手続きが完了いたしました事、ご報告させていただきます。\n\n"
			txt_mail += "【情報】\n"
			txt_mail += `※広告アカウント：${account_id}\n`
			txt_mail += "※広告主様："
			txt_mail += (advertiser.length > 0 ? `${advertiser}` : "XXXX")
			txt_mail += "\n\n本件に関してご不明な点がございましたらこちらにお返事いただけると幸いです。\nこの度はコンシェルジュサポートのご利用ありがとうございました!\n"
			txt_mail += "また何かございましたらご遠慮なくお問い合わせくださいませ。\nどうかよい1日をお過ごしください！\n\n"
			txt_status = "donec"
			break
		case "inv-initial":
			txt_mail += `お問い合わせ頂いた「JP Invoicing Request Form (アカウント開設依頼）(Case ID: ${caseNo})」の件でご連絡を差し上げております。\n\n`
			txt_mail += `広告アカウント( ${account_id} )開設のご依頼を承りました。\n担当部署よりアップデート受領次第、改めてご連絡させていただきます。\n\n`
			txt_mail += txm_wait4 + "\n\n"
			txt_status = "continue"
			break
		case "inv-billing":
			txt_mail += `お問い合わせ頂いた「JP Invoicing Request Form (アカウント開設依頼）(Case ID: ${caseNo})」の件でご連絡を差し上げております。\n\n`
			txt_mail += `広告アカウント( ${account_id} )開設につきまして、一点確認をさせていただきたく存じますが、\n広告アカウントの設定画面にて「Billing County」の設定はされておりますでしょうか。\n\n`
			txt_mail += `生憎、こちらのヘルプセンターでは権限の関係で広告アカウント：${account_id} の設定画面の内容が確認できませんため、`
			txt_mail += txm_billingcountry + "\n\n"
			txt_status = "continue"
			break
		case "inv-relationship":
			const advertiser2 = document.getElementById("advertiser-name").value
			txt_mail += `お問い合わせ頂いた「JP Invoicing Request Form (アカウント開設依頼）(Case ID: ${caseNo})」の件でご連絡を差し上げております。\n\n`
			txt_mail += `本件に関して担当部署にて申請内容を確認させていただいたのですが、広告アカウント：（ID:${account_id}）と、広告主「${advertiser2}」様の関係性を確認することができないようでござました。\n\n`
			txt_mail += txm_additional + "\n\n"
			txt_mail += `-　広告アカウントID: ${account_id}で広告を配信されるビジネスと、広告主「${advertiser2}」様の関係性を示すドキュメント\n\n`
			txt_mail += `-　広告アカウントID: ${account_id}が、広告主「${advertiser2}」様によって運用されることを伝えるクライアント様/代理店様からのメール内容のスクリーンショット\n\n`
			txt_mail += txm_withscreenshot
			txt_status = "continue"
			break
		case "inv-wrongly":
			txt_mail += `お問い合わせ頂いた「JP Invoicing Request Form (アカウント開設依頼）(Case ID: ${caseNo})」の件でご連絡を差し上げております。\n\n`
			txt_mail += `先ほど以下のメールを${txt_name}様宛に誤って送信してしまいました。\n`
			txt_mail += txm_wrongly_sent + "\n"
			break
	}

	switch (txt_status) {
		case "continue":
			txt_mail += txm_other2 + "\n\n"
			txt_mail += txm_tqcon + "\n\n"
			break
		case "donec":
			setClosing()
			txt_mail += txt_closing + "\n\n"
			break
		case "nosurvey":
			txt_mail += txm_tqe + "\n\n"
			txt_mail += txm_tqfu + "\n\n"
			break
	}

	txt_mail += txm_senderj + txm_concierge + "\n"
	setMailarea(txt_mail)
}

function writeEmailtoSales(){
	setOpening()
	let txt_mail = ""
	txt_mail += "Hi Team,\n\nGood day to you.\n\nThis is Miwa from Concierge Support team.\n\n"

	if (mailType=="inv-sales"){
		const crmid = document.getElementById("orgcrm-id").value
		txt_mail += "I am sending CRM link below for your reference for the connection request:\n"
		txt_mail += `https://our.intern.facebook.com/intern/crm/relay/organization/${crmid}/overview\n\n`
		txt_mail += `※Job #: ${caseNo}\n\n`
		txt_mail += "Please kindly reply to this thread if you disagree with this entity to tag with this ad account ID.\n\n"
	}

	txt_mail += "Thank you & best regards,\n\n"
	txt_mail += "Miwa\n" + txm_concierge
	setMailarea(txt_mail)
}

function setMailProb(){
	txt_prob = document.getElementById("mail-prob").value
}

function setMailType(obj){
	mailType = obj.value
}

function copyInput() {
	const copyText = document.getElementById("sales-email")
	copyText.select()
	document.execCommand("copy")
	alert("Copied email: " + copyText.value)
}

function clearCaseId(){
	document.getElementById("case-no").value = ""
	document.getElementById("adaccount-id").value = ""
	document.getElementById("mail-header").value = ""
}
// This returns the selected object in a radiobutton array
function getOption(arr) {
  for (i = 0 ; i < arr.length; i++)
  {
    if (arr[i].checked) return arr[i]
  }
  return null
}

function caseClear() {
	cusName = undefined
	caseNo = undefined
	contStatus = undefined
	mailType = undefined
	account_id = undefined
	txt_tier = ''
	txt_closing = ""
	txt_name = ""
	txt_email = ""
	txt_prob = ""
	txt_status = ""
	txt_type = ""

	document.getElementById("cus-name").value = ""
	document.getElementById("case-no").value = ""
	document.getElementById("adaccount-id").value = ""
	document.getElementById("mail-prob").value = ""
	document.getElementById("dupcase-no").value = ""
	document.getElementById("agent-name").value = ""
	document.getElementById("mail-area").value = ""
	document.getElementById("advertiser-name").value = ""
	document.getElementById("orgcrm-id").value = ""
	document.getElementById("sales-email").value = ""

	document.getElementById("tday").value = undefined

	document.getElementById("status_done").checked = false
	document.getElementById("status_cont").checked = false
	document.getElementById("status_dns").checked = false
	document.getElementById("type-email").checked = false
	document.getElementById("type-chat").checked = false
	document.getElementById("type-chatpolicy").checked = false
	document.getElementById("type-follow").checked = false
	document.getElementById("tier_NA").checked = false
	document.getElementById("tier_GSO").checked = false
	document.getElementById("tier_SMB").checked = false

	document.getElementById("mail_chatend").checked = false
	document.getElementById("mail_errreply").checked = false
	document.getElementById("mail_videoen").checked = false
	document.getElementById("mail_additional").checked = false
	document.getElementById("mail_disabled").checked = false
	document.getElementById("mail_pending").checked = false
	document.getElementById("mail_acctback").checked = false
	document.getElementById("mail_acctdenied").checked = false
	document.getElementById("mail_disapproved").checked = false
	document.getElementById("mail_apprv").checked = false
	document.getElementById("mail_reject").checked = false
	document.getElementById("mail_interim").checked = false
	document.getElementById("mail_duplicate").checked = false
	document.getElementById("mail_noupdate").checked = false
	document.getElementById("mail_under").checked = false
	document.getElementById("mail_afterclose").checked = false
	document.getElementById("mail_forceclose").checked = false
	document.getElementById("mail_behalf").checked = false
	document.getElementById("mail-inv-complete").checked = false
	document.getElementById("mail-inv-init").checked = false
	document.getElementById("mail-inv-sales").checked = false
	document.getElementById("mail-inv-sales").checked = false
}

splitByLine = function() {
    var text  = document.getElementById('mail-area').value.replace(/\r\n|\r/g, "\n")
    var objVariables = JSON.parse(text)

    // alert(JSON.stringify(objVariables))
		document.getElementById("tday").value = objVariables["caseDate"]
		document.getElementById("case-no").value = objVariables["caseNum"]
		caseNo = objVariables["caseNum"]
		document.getElementById("cus-name").value = objVariables["cusName"]
		txt_name = objVariables["cusName"]
		txt_email = objVariables["email"]
		document.getElementById("adaccount-id").value = objVariables["aid"]
		account_id = objVariables["aid"]

		document.getElementById("mail-prob").value=　objVariables["summary"]
		txt_prob = objVariables["summary"]

		pol_aid =  objVariables["aid"]
		pol_ads = objVariables["ads"]
		pol_link = objVariables["link"]
		contStatus = objVariables["cont"]
}

function setMailarea(str){
	document.getElementById("mail-area").value = str
	if(execCopy(str)){
		alert('メール文をコピーできました\n'+"----------------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
}

function clearMailarea(){
	document.getElementById("mail-area").value = ""
}

function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  txt_today = yyyy + '-' + mm + '-' + dd;
  document.getElementById("tday").value = txt_today;
}

function copytext(){
	const str = document.getElementById("mail-area").value
	if(execCopy(str)){
		alert('メール文をコピーできました\n'+"-----------------------\n"+str)
	}else {
		alert('このブラウザでは対応していません')
	}
}

function PN() {
	textstring = ''
	textstring += txt_closing + '\n'
	document.getElementById("myTextarea").value = textstring
	copyToClipboard(textstring)
}

function execCopy(string){
  var temp = document.createElement('div')

  temp.appendChild(document.createElement('pre')).textContent = string

  var s = temp.style
  s.position = 'fixed'
  s.left = '-100%'

  document.body.appendChild(temp)
  document.getSelection().selectAllChildren(temp)

  var result = document.execCommand('copy')

  document.body.removeChild(temp)
  // true なら実行できている falseなら失敗か対応していないか
  return result
}
